let scores = [3, 4, 8];
let initialValue = 0;

let sum = scores.reduce(function (accumulator, currentValue) {
    console.log(`accumulator is ${accumulator} and currentValue is ${currentValue}`);

    return accumulator + currentValue;
}, initialValue);
