let arrayTTT = new Array(10);
let boardTTT = document.getElementById("boardTTT");
let next = false;

function initArray() {

    for (let i = 0; i < arrayTTT.length; i++) {
        arrayTTT[i] = new Array(10);
        for (let j = 0; j < arrayTTT[i].length; j++) {
            arrayTTT[i][j] = ".";
        }
    }
}

function printArray() {
    let arrayTTTDisplay = "";
    for (let i = 0; i < arrayTTT.length; i++) {
        for (let j = 0; j < arrayTTT[i].length; j++) {
            arrayTTTDisplay += arrayTTT[i][j] + "&emsp;";
        }
        arrayTTTDisplay += "<br>";
    }
    arrayTTTDisplay += "<button onclick='choosePosition()'>Play</button>"
    boardTTT.innerHTML = arrayTTTDisplay;
}

function choosePosition() {
    let rowIndex = prompt("Input row index:");
    let colIndex = prompt("Input column index:");
    arrayTTT[rowIndex][colIndex] = next?"X":"O";

    // Change X <-> O
    next?next = false:next = true;

    printArray();

    if (isWon()) {
        alert(arrayTTT[rowIndex][colIndex] + " WON");
        initArray();
        printArray();
    }
}

function isWon() {
    for (let i = 0; i < arrayTTT.length; i++) {
        for (let j = 0; j < arrayTTT[i].length; j++) {
            if (arrayTTT[i][j] !== ".") { // X or O
                if ((arrayTTT[i][j] === arrayTTT[i][j + 1] && arrayTTT[i][j] === arrayTTT[i][j + 2])
                    || (arrayTTT[i][j] === arrayTTT[i + 1][j] && arrayTTT[i][j] === arrayTTT[i + 2][j])
                    || (arrayTTT[i][j] === arrayTTT[i + 1][j + 1] && arrayTTT[i][j] === arrayTTT[i + 2][j + 2])) {
                    return true;
                }
            }
        }
    }
    return false;
}

// Execute
initArray();
printArray();