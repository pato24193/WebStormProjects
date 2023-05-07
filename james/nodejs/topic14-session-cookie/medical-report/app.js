var cookie = require('cookie');
var escapeHtml = require('escape-html');
var http = require('http');
var url = require('url');
var fs = require('fs');
var qs = require('qs');

let server = http.createServer((req, res) => {

    if (req.url === '/report') {
        // Click button [Report]
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        })

        req.on('end', () => {
            let medicalForm = qs.parse(data);
            res.setHeader('Set-Cookie',
                [cookie.serialize('name', String(medicalForm.name), {
                    httpOnly: true, maxAge: 20
                }), cookie.serialize('idCard', String(medicalForm.idCard), {
                    httpOnly: true, maxAge: 20
                }), cookie.serialize('dob', String(medicalForm.dob), {
                    httpOnly: true, maxAge: 20
                })]);
            // res.setHeader('Set-Cookie', [`name=${String(medicalForm.name)}; Max-Age=1`]);

            res.statusCode = 302;
            res.setHeader('Location', '/');
            return res.end();
        });
    } else {
        // Initial screen
        fs.readFile('views/medical_report.html', 'utf-8', (err, data) => {
            let cookies = cookie.parse(req.headers.cookie || '');
            let name, idCard, dob;
            console.log(cookies);
            if (cookies.name !== undefined) {
                name = cookies.name;
                idCard = cookies.idCard;
                dob = cookies.dob;
            } else {
                name = '';
                idCard = '';
                dob = '';
            }

            data = data.replace('{nameValue}', name);
            data = data.replace('{idCardValue}', idCard);
            data = data.replace('{dobValue}', dob);

            res.write(data);
            return res.end();
        });
    }
});

server.listen(8080, () => {
    console.log('Server startup 8080...');
})
