let productNameArray = ["Sony Experia", "Samsung Galaxy", "Nokia 6"];

function showListProduct() {
    let tblProduct = document.getElementById("tblProduct");
    let htmlProduct = '    <tr>\n' +
        '        <th>No</th>\n' +
        '        <th>Product Name</th>\n' +
        '        <th></th>\n' +
        '        <th></th>\n' +
        '    </tr>';

    for (let i = 0; i < productNameArray.length; i++) {
        htmlProduct += '    <tr>\n' +
            '        <td>' + (i + 1) + '</td>\n' +
            '        <td><input id="' + i + '" type="text" value="' + productNameArray[i] + '" readonly/></td>\n' +
            '        <td id="td' + i + '"><button onclick="changeBtnSubmit(' + i + ')">Edit</button></td>\n' +
            '        <td><button onclick="deleteProduct(' + i + ')">Delete</button></td>\n' +
            '    </tr>'
    }

    tblProduct.innerHTML = htmlProduct;
}

function addNewProduct() {
    let newProductName = document.getElementById("newProductName");
    productNameArray.push(newProductName.value);
    newProductName.value = "";

    showListProduct();
}

function changeBtnSubmit(id) {
    let tdProduct = document.getElementById("td" + id);
    let inputProduct = document.getElementById(id);
    inputProduct.readOnly = false;
    tdProduct.innerHTML = '<button onclick="updateProduct(' + id + ')">Submit</button>';
}

function updateProduct(id) {
    let inputProduct = document.getElementById(id);
    productNameArray[id] = inputProduct.value;

    showListProduct();
}

function deleteProduct(id) {
    for (let i = id; i < productNameArray.length - 1; i++) {
        productNameArray[i] = productNameArray[i + 1];
    }

    productNameArray.pop();

    showListProduct();
}

showListProduct();