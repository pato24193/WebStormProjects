const http = require('http');
const fs = require('fs');
const qs = require('qs');
const Mustache = require('mustache');
let listUsers = '';

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('user.html', 'utf-8', (err, data) => {
            res.write(data);
            return res.end();
        });
    } else {
        let data = '';
        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            let userInfo = qs.parse(data);

            listUsers += `<tr>
                <td>${userInfo.username}</td>
                <td>${userInfo.dateOfBirth}</td>
            </tr>`;

            fs.readFile('user.html', 'utf-8', (err, dataHTML) => {
                // const view = {
                //     listUsers: listUsers
                // };
                //
                // dataHTML = Mustache.render(dataHTML, view);
                dataHTML = dataHTML.replace('{listUsers}', listUsers);
                res.write(dataHTML);

                return res.end();
            });

        })
    }
});

server.listen(8080, () => {
    console.log('Server startup...');
});
