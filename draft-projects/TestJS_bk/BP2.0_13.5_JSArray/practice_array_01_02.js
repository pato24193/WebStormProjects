let arrayInteger = [3, 23, 1, 12, 9, 10, 5, 4, 100];
let max = arrayInteger[0];
let pos = 0;

for (let i = 1; i < arrayInteger.length; i++) {
    if (arrayInteger[i] > max) {
        max = arrayInteger[i];
        pos = i;
    }
}

document.write("Max = " + max + " and position = " + pos);