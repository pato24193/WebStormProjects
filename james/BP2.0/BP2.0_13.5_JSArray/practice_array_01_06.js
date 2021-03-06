let arrayInteger = new Array(10);
for (let i = 0; i < arrayInteger.length; i++) {
    arrayInteger[i] = prompt("Please input element " + i + ": ");
}

let numberV = prompt("Please input V: ");

if (arrayInteger.indexOf(numberV) >= 0) {
    document.write("V is in the array");
} else {
    document.write("V is not in the array");
}