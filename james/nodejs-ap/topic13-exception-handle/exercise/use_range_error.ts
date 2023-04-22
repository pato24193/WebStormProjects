function calculator(number1, number2, operator) {

    if (operator !== '+' && operator !== '-' && operator !== '*' && operator !== '/') {
        throw new RangeError('The operator must be an +, -, *, /');
    }

    let result;
    if (operator == '+') {
        result = number1 + number2;
    } else if (operator == '-') {
        result = number1 - number2;
    } else if (operator == '*') {
        result = number1 * number2;
    } else if (operator == '/') {
        result = number1 / number2;
    }
    return result;
}

try {
    console.log(calculator(3, 9, '%'));
} catch (error) {
    console.log(error.message);
}


// 1. Create project NodeJS
// 2. npm install typescript
// 3. npm install ts-node
// 4. Setting node package in Edit Config -> folder ts-node
// 5. Add "dom" in tsconfig.json to use "console.log".
// 6. Install plugin "Run config for TypeScript"
