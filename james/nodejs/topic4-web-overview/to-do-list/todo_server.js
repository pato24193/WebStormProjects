const http = require('http');
const fs = require('fs');
const qs = require('qs');
let listTasks = '';

const server = http.createServer((req, res) => {
    if(req.method === 'GET') {
        fs.readFile('todo.html', (err, data) => {
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.write(data);
            return res.end();
        })
    } else {
        let data = '';

        req.on('data', chunk => {
            data += chunk;
        });

        req.on('end', () => {
            let taskInfo = qs.parse(data);

            fs.readFile('display.html','utf8', (err, dataHTML) => {

                // add task to display.html
                listTasks += `<tr>
                    <td>${taskInfo.taskName}</td>
                </tr>`;
                dataHTML = dataHTML.replace('{listTasks}', listTasks);

                res.write(dataHTML);

                return res.end();
            });
        });
    }
});

server.listen(8080, () => {
    console.log('Server startup...');
})
