let arrayInteger = new Array(10);
for (let i = 0; i < arrayInteger.length; i++) {
    arrayInteger[i] = prompt("Please input element " + i + ": ");
}
document.write("Before: " + arrayInteger + "<br>");

let numberV = prompt("Please input V: ");
let posV = arrayInteger.indexOf(numberV)
if (posV >= 0) {
    document.write("V is in the array <br>");

    for (let i = posV; i < arrayInteger.length - 1; i++) {
        arrayInteger[i] = arrayInteger[i + 1];
    }
    arrayInteger[arrayInteger.length - 1] = 0;
} else {
    document.write("V is not in the array <br>");
}

document.write("After: " + arrayInteger + "<br>");