const http = require('http');
const fs = require('fs');
const qs = require('qs');
const url = require('url');
let html = '';

const server = http.createServer((req, res) => {
    let dataFile = '';

    html = '';
    fs.readFile('db.json', 'utf-8', (err, str) => {
        dataFile = JSON.parse(str);

        dataFile.forEach((value, index) => {
            html += `<tr>
                <td>${index + 1}</td>
                <td>${value.name}</td>
                <td>${value.price}</td>
                <td>
                    <button class="btn btn-danger">Delete</button>
                    <button class="btn btn-primary"
                        onclick="goModifyingScreen(${value.id})">Update</button>
                </td>
            </tr>`;
        });

    });


    var parseUrl = url.parse(req.url, true);

    //get the path
    var path = parseUrl.pathname;
    var trimPath = path.replace(/^\/+|\/+$/g, '');
    console.log(path);
    console.log(trimPath);
    console.log(routes[trimPath]);
    var chosenHandler = (typeof (routes[trimPath]) !== 'undefined') ? routes[trimPath] : handlers.notFound;

    if (trimPath === '') {
        chosenHandler = handlers.listProduct;
    }

    if (trimPath !== 'favicon.ico') {
        chosenHandler(req, res);
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

            // Get list product
            let dataFile;
            fs.readFile('db.json', 'utf-8', (err, str) => {
                dataFile = JSON.parse(str);
                console.log(dataFile);

                // Set id for product
                let lastProduct = dataFile[dataFile.length - 1];
                productObj.id = lastProduct.id + 1;

                // Add product in db.json
                dataFile.push(productObj);

                fs.writeFile('db.json', JSON.stringify(dataFile), errWriting => {
                    if (errWriting) {
                        console.log('Error writing');
                    }

                    dataHTML = dataHTML.replace('{msg}', 'Register successfully!');
                    res.write(dataHTML);

                    return res.end();
                });
            });

        });
    });
}

handlers.updateProduct = function (req, res) {
    fs.readFile('views/update_product.html', 'utf-8', (err, dataHTML) => {
        dataHTML = dataHTML.replace('{msg}', '');

        var parseUrl = url.parse(req.url, true);
        var queryStringObject = parseUrl.query;

        console.log(queryStringObject.id);

        // Get list product
        fs.readFile('db.json', 'utf-8', (err, str) => {
            let dataFile = JSON.parse(str);
            let productInJSON = dataFile.find(product => product.id === Number(queryStringObject.id));

            // Display info product
            dataHTML = dataHTML.replace('{nameValue}', productInJSON.name);
            dataHTML = dataHTML.replace('{priceValue}', productInJSON.price);
            dataHTML = dataHTML.replace('{idValue}', queryStringObject.id);
            res.write(dataHTML);

            return res.end();
        });


    })
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
            console.log(productForm)
            // Get list product
            let dataFile;
            fs.readFile('db.json', 'utf-8', (err, str) => {
                dataFile = JSON.parse(str);

                // Get index product in JSON
                let indexProductInJSON = dataFile.findIndex(product => product.id === Number(productForm.id));

                productForm.id = Number(productForm.id);
                dataFile[indexProductInJSON] = productForm;

                // Update product in file
                fs.writeFile('db.json', JSON.stringify(dataFile), errWriting => {
                    if (errWriting) {
                        console.log('Error writing');
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
    });
}


let routes = {
    'listProduct': handlers.listProduct,
    'addProduct': handlers.addProduct,
    'register': handlers.register,
    'updateProduct': handlers.updateProduct,
    'update': handlers.update
};

server.listen(8080, () => {
    console.log('Server startup 8080...')
});


// string to obj: JSON.parse
// object to string: JSON.stringify
