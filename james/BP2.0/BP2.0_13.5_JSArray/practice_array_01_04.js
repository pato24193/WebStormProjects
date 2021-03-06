let len = parseInt(prompt("Please input length of array: "));
let arrayInteger = new Array(len);
for (let i = 0; i < arrayInteger.length; i++) {
    arrayInteger[i] = prompt("Please input element " + i + ": ");
}

document.write(arrayInteger.reverse());