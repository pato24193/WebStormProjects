let arrayIntegerA = new Array(10);
for (let i = 0; i < arrayIntegerA.length; i++) {
    arrayIntegerA[i] = prompt("Please input A element " + i + ": ");
}

let arrayIntegerB = new Array(10);
for (let i = 0; i < arrayIntegerB.length; i++) {
    arrayIntegerB[i] = prompt("Please input B element " + i + ": ");
}

let arrayIntegerC = new Array(20);
arrayIntegerC = arrayIntegerA.concat(arrayIntegerB);

document.write("Array A: " + arrayIntegerA + "<br>");

document.write("Array B: " + arrayIntegerB + "<br>");

document.write("Array C: " + arrayIntegerC + "<br>");
