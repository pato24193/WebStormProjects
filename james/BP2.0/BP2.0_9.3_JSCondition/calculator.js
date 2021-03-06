

function display(character) {
    let inputOutput = document.getElementById("inputOutput");
    let inputOutputStr = inputOutput.value;

    switch (character) {
        case 'C':
            inputOutputStr = "";
            break;
        case '=':
            inputOutputStr = calculate(inputOutputStr);
            break;
        default:
            inputOutputStr += character;
    }

    inputOutput.value = inputOutputStr;
}

function calculate(inputOutputStr) {
    let charArray = inputOutputStr.split("");
    let operator = charArray[1];
    let number1 = parseInt(charArray[0]);
    let number2 = parseInt(charArray[2]);
    let resultValue = 0;

    if (operator === "+") {
        resultValue = number1 + number2;
    } else if (operator === "-") {
        resultValue = number1 - number2;
    } else if (operator === "x") {
        resultValue = number1 * number2;
    } else {
        resultValue = number1 / number2;
    }

    return resultValue;
}