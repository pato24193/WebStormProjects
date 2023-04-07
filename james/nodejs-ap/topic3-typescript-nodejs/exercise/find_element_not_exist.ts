let numbers: number[] = [0, 2, 3, 5, 7, 8, 9, 10];
let result = [];

for (let i = 0; i <= 10; i++) {
    if (numbers.indexOf(i) < 0) {
        result.push(i);
    }
}

console.log(result);
