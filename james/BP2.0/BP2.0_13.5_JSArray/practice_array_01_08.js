let arrayInteger = new Array(10);
for (let i = 0; i < arrayInteger.length; i++) {
    arrayInteger[i] = prompt("Please input element " + i + ": ");
}

document.write("Before: " + arrayInteger + "<br>");
arrayInteger.sort(function (a, b) {
    return b - a;
})
document.write("After: " + arrayInteger + "<br>");
