
function getNumberOfOccurrence(numbers: number[], value: number): number {
    let count = 0;

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] === value) {
            count++;
        }
    }

    return count;
}

let a = [9, 2, 5, 2, 4, 9, 3, 1, 2];
let e = 9;

console.log(getNumberOfOccurrence(a, e));
