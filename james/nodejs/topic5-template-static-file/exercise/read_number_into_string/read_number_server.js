const http = require('http');
const fs = require('fs');
const qs = require('qs');
const Mustache = require('mustache');
const rn = require("./read_number.js");

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('read_number.html', 'utf-8', (err, data) => {

            const view = {
                numberInputValue: '',
                resultDisplay: ''
            };
            data = Mustache.render(data, view);
            res.write(data);

            return res.end();
        })
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {
            let numberForm = qs.parse(data);
            let result = rn.doConvert(numberForm.numberInput);

            fs.readFile('read_number.html', 'utf-8', (err, dataHTML) => {
                const view = {
                    numberInputValue: numberForm.numberInput,
                    resultDisplay: result
                };

                dataHTML = Mustache.render(dataHTML, view);

                res.write(dataHTML);

                return res.end();
            })

        })
    }
});

server.listen(8080, () => {
    console.log('Server startup...');
});
