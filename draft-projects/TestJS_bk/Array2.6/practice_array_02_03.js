let arrayChar = ['a', 'b', '1', 'c', '2'];
let count = 0;

for (let i = 0; i < arrayChar.length; i++) {
    if (arrayChar[i] >= '1' && arrayChar[i] <= '2') {
        count++;
    }
}

document.write("Number of digit characters: " + count);