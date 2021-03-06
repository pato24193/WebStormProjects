function isPositiveNumber(a) {
    return a >= 0;
}

let n = prompt("Please input a number: ");
if (isPositiveNumber(n)) {
    alert("This is a positive number");
} else {
    alert("This is a negative number");
}