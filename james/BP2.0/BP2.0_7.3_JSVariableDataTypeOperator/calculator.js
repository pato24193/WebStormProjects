

function calculate(operator) {
    let number1 = parseInt(document.getElementById("number1").value);
    let number2 = parseInt(document.getElementById("number2").value);
    let result = document.getElementById("result");
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
    
    result.innerHTML = resultValue;
}