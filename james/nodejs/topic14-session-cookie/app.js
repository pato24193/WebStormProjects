const http = require('http');
const fs = require('fs');
const qs = require('qs');
const url = require('url');
const localStorage = require('local-storage');
const mysql = require('mysql2');
const fsp = require('fs').promises;

let cartGlobal = [];
let tokenIdGlobal = '';

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '12345678',
    database: 'product_management',
    charset: 'utf8_general_ci'
});

connection.connect(function (err) {
    if (err) {
        throw err.stack;
    } else {
        console.log("connect success");
    }
});

let html = '';

const server = http.createServer((req, res) => {
    var parseUrl = url.parse(req.url, true);

    //get the path
    var path = parseUrl.pathname;
    var trimPath = path.replace(/^\/+|\/+$/g, '');
    var chosenHandler = (typeof (routes[trimPath]) !== 'undefined') ? routes[trimPath] : handlers.notFound;

    console.log(trimPath)

    if (trimPath === '') {
        let dataFile = '';

        html = '';
        const sqlSelectListProduct =
            'select id, name, price from product';

        connection.query(sqlSelectListProduct, (err, result) => {
            if (err) {
                throw err;
            }

            result.forEach((value, index) => {
                html += `<tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td>
                    <button class="btn btn-danger">Delete</button>
                    <button class="btn btn-primary"
                        onclick="goModifyingScreen(${value.id})">Update</button>
                    <button class="btn btn-success"
                        onclick="addInCart(${value.id})">Buy</button>
                </td>
            </tr>`;
            });
        })

        chosenHandler = handlers.listProduct;
    }

    if (trimPath !== 'favicon.ico') {
        // Check existence of session
        tokenIdGlobal = localStorage.get('token');
        console.log('token');
        console.log(tokenIdGlobal);
        if (tokenIdGlobal !== null) {
            // exist
            fs.readFile('token/' + tokenIdGlobal, 'utf-8', (err, data) => {
                if (err) {
                    console.error(err);
                    return;
                }

                cartGlobal = JSON.parse(data);
                console.log(cartGlobal);
                chosenHandler(req, res);
            });
        } else {
            // not exist
            tokenIdGlobal = createRandomString(20);
            localStorage.set('token', tokenIdGlobal);
            setTokenSession(tokenIdGlobal, cartGlobal).then(value => {
                chosenHandler(req, res);
            });
        }
    }
});

let handlers = {};

handlers.listProduct = function (req, res) {
    fs.readFile('views/list_product.html', 'utf-8', (err, data) => {
        data = data.replace('{listProducts}', html);
        res.write(data);

        return res.end();
    })
}

handlers.addProduct = function (req, res) {
    fs.readFile('views/add_product.html', 'utf-8', (err, dataHTML) => {
        dataHTML = dataHTML.replace('{msg}', '');
        res.write(dataHTML);

        return res.end();
    })
}

handlers.register = function (req, res) {
    fs.readFile('views/add_product.html', 'utf-8', (err, dataHTML) => {

        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {

            // Get info product from screen
            let productObj = qs.parse(data);
            let sqlInsertProduct
                = `insert into product(name, price) values('${productObj.name}', '${productObj.price}')`;

            connection.query(sqlInsertProduct, (errSQL, result) => {
                if (errSQL) {
                    throw errSQL;
                }
                dataHTML = dataHTML.replace('{msg}', 'Register successfully!');
                res.write(dataHTML);

                return res.end();
            })
        });
    });
}

handlers.updateProduct = function (req, res) {
    fs.readFile('views/update_product.html', 'utf-8', (err, dataHTML) => {
        dataHTML = dataHTML.replace('{msg}', '');

        var parseUrl = url.parse(req.url, true);
        var queryStringObject = parseUrl.query;

        let sqlSelectProductById =
            `select id, name, price from product where id = ${queryStringObject.id}`;

        connection.query(sqlSelectProductById, (errSQL, result) => {
            if (errSQL) {
                throw errSQL;
            }

            // Display info product
            dataHTML = dataHTML.replace('{nameValue}', result[0].name);
            dataHTML = dataHTML.replace('{priceValue}', result[0].price);
            dataHTML = dataHTML.replace('{idValue}', result[0].id);
            res.write(dataHTML);

            return res.end();
        });
    });
}

handlers.update = function (req, res) {
    fs.readFile('views/update_product.html', 'utf-8', (err, dataHTML) => {

        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {

            // Get info product from screen
            let productForm = qs.parse(data);

            let sqlUpdateProduct =
                `update product 
                set name = '${productForm.name}', price = '${productForm.price}'
                where id = ${productForm.id}`;

            connection.query(sqlUpdateProduct, (errSQL, result) => {
                if (errSQL) {
                    throw errSQL;
                }

                dataHTML = dataHTML.replace('{nameValue}', productForm.name);
                dataHTML = dataHTML.replace('{priceValue}', productForm.price);
                dataHTML = dataHTML.replace('{idValue}', productForm.id);
                dataHTML = dataHTML.replace('{msg}', 'Update successfully!');
                res.write(dataHTML);

                return res.end();
            });
        });
    });
}

handlers.addInCart = function (req, res) {
    let parseUrl = url.parse(req.url, true);
    let queryStringObject = parseUrl.query;
    let idProduct = Number(queryStringObject.id);
    let productObj = cartGlobal.find(product => product.id === idProduct);

    if (productObj === undefined) {
        // if product doesn't exist in cart
        productObj = {id: idProduct, quantity: 1};
        cartGlobal.push(productObj);
    } else {
        // if product exist in cart
        productObj.quantity++;
        let indexProduct = cartGlobal.findIndex(product => product.id === idProduct);
        cartGlobal[indexProduct] = productObj;
        console.log(cartGlobal);
    }

    // Update session
    setTokenSession(tokenIdGlobal, cartGlobal).then(value => {
    }).catch(reason => {
        console.log('Error');
        console.log(reason);
    }).finally(() => {
        handlers.cart(req, res);
        // return res.end();
    })
    // fs.writeFile('token/' + tokenIdGlobal, JSON.stringify(cartGlobal), err => {
    //     // res.statusCode = 302;
    //     // res.setHeader('Location', '/');
    //     // return res.end();
    //     handlers.cart(req, res);
    // });
    // return res.end();
}

handlers.cart = function (req, res) {
    fs.readFile('views/cart.html', 'utf-8', (err, data) => {
        html = '';

        cartGlobal.forEach((value, index) => {
            html += `<tr>
                <td>${value.id}</td>
                <td>${value.quantity}</td>
            </tr>`;
        });

        data = data.replace('{listProducts}', html);
        res.write(data);

        return res.end();
    });
}

    let routes = {
        'listProduct': handlers.listProduct,
        'addProduct': handlers.addProduct,
        'register': handlers.register,
        'updateProduct': handlers.updateProduct,
        'update': handlers.update,
        'addInCart': handlers.addInCart,
        'cart': handlers.cart
    };

    server.listen(8080, () => {
        console.log('Server startup 8080...')
    });


// string to obj: JSON.parse
// object to string: JSON.stringify

var createRandomString = function (strLength) {
    strLength = typeof (strLength) == 'number' & strLength > 0 ? strLength : false;
    if (strLength) {
        var possibleCharacter = 'abcdefghiklmnopqwerszx1234567890';
        var str = '';
        for (let i = 0; i < strLength; i++) {
            let ramdomCharater = possibleCharacter.charAt(Math.floor(Math.random() * possibleCharacter.length));
            str += ramdomCharater;
        }
        return str;
    }
}

var setTokenSession = async function (tokenId, data) {
    try{
        let fileName = 'token/' + tokenId;
        await fsp.writeFile(fileName, JSON.stringify(data), err => {});
    } catch (e) {
        console.log(e);
    }
};
