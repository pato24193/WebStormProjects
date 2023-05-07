let http = require('http');
let fs = require('fs');
let qs = require('qs');
let url = require('url');
let userInfo;

let server = http.createServer((req, res) => {
    //get url and parse
    if (req.url !== '/favicon.ico') {
        var parseUrl = url.parse(req.url, true);

        //get the path
        var path = parseUrl.pathname;
        var trimPath = path.replace(/^\/+|\/+$/g, '');
        console.log(path)
        console.log(trimPath);
        console.log(routes[trimPath]);
        var chosenHandler = (typeof (routes[trimPath]) !== 'undefined') ? routes[trimPath] : handlers.notFound;

        if (trimPath === '') {
            chosenHandler = handlers.home;
        }

        if (trimPath === 'checkLogin') {
            let data = '';
            req.on('data', chunk => {
                data += chunk;
            });

            req.on('end', () => {
                userInfo = qs.parse(data);
                console.log(userInfo);
            })
            chosenHandler = handlers.profile;
        }

        chosenHandler(req, res);
    }
});

let handlers = {}

handlers.home = function(req, res) {
    fs.readFile('views/home.html', 'utf-8', (err, data) => {
       res.write(data);
       return res.end();
    });
}

handlers.login = function(req, res) {
    fs.readFile('views/login.html', 'utf-8', (err, data) => {
        res.write(data);
        return res.end();
    });
}

handlers.profile = function(req, res) {
    fs.readFile('views/profile.html', 'utf-8', (err, data) => {
        data = data.replace('{username}', userInfo.username);
        res.write(data);
        return res.end();
    });
}

handlers.notfound = function(req, res) {
    fs.readFile('views/notfound.html', 'utf-8', (err, data) => {
        res.write(data);
        return res.end();
    });
}

let routes = {
    'home': handlers.home,
    'login': handlers.login,
    'profile': handlers.profile,
    'notfound': handlers.notfound
};

server.listen(8080, () => {
    console.log('Server startup: 8080');
})
