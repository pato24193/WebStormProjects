let arrayInteger = [-3, 23, -1, 12, 9, -10, 5, 3, 100];
let count = 0;

for (let i in arrayInteger) {
    if (arrayInteger[i] < 0) {
        count++;
    }
}

document.write(count);