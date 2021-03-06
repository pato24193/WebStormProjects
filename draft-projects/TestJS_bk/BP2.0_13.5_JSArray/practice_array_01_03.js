let arrayInteger = [3, 23, 1, 12, 9, 10, 5, 4, 100];
let max = arrayInteger[0];
let sum = arrayInteger[0];
let count = 1;

for (let i = 1; i < arrayInteger.length; i++) {
    sum += arrayInteger[i];
    count++;
    if (arrayInteger[i] > max) {
        max = arrayInteger[i];
    }
}

document.write("Max = " + max + " and average value = " + sum/count);