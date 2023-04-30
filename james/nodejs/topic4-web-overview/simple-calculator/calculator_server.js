const http = require('http');
const fs = require('fs');
const qs = require('qs');

const server = http.createServer((req, res) => {

    if (req.method === 'GET') {
        fs.readFile('calculator.html', 'utf-8', (err, data) => {

            data = data.replace('{firstNumber}', '');
            data = data.replace('{signingMath}', '');
            data = data.replace('{secondNumber}', '');
            data = data.replace('{result}', '...');

            res.write(data);
            return res.end();
        });
    } else {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            let calculatorForm = qs.parse(data);
            let {firstNumber, signingMath, secondNumber} = calculatorForm;
            let result = eval(firstNumber + signingMath + secondNumber);
            console.log(result);
            fs.readFile('calculator.html', 'utf-8', (err, dataHTML) => {

                dataHTML = dataHTML.replace('{firstNumber}', firstNumber);
                dataHTML = dataHTML.replace('{signingMath}', signingMath);
                dataHTML = dataHTML.replace('{secondNumber}', secondNumber);
                dataHTML = dataHTML.replace('{result}', result);
                res.write(dataHTML);

                return res.end();
            });
        })
    }
});

server.listen('8080', () => {
    console.log('Server startup...');
});
