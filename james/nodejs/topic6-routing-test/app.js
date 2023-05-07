var http = require('http');
var url = require('url');
var fs = require('fs');

let server = http.createServer(function (req, res) {
    //get url and parse
    if (req.url !== '/favicon.ico') {
        var parseUrl = url.parse(req.url, true);

        //get the path
        var path = parseUrl.pathname;
        var trimPath = path.replace(/^\/+|\/+$/g, '');
        console.log(path)
        console.log(trimPath);
        console.log(router[trimPath]);
        var chosenHandler = (typeof (router[trimPath]) !== 'undefined') ? router[trimPath] : handlers.notFound;
        chosenHandler(req, res);
    }
});

var handlers = {};
// products page
handlers.products = function (rep, res) {
    fs.readFile('./view/products.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};
// handlers.users page
handlers.users = function (rep, res) {
    fs.readFile('./view/users.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

// not found
handlers.notFound = function (rep, res) {
    fs.readFile('./views/notfound.html', function(err, data) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        return res.end();
    });
};

//definer the request router
var router = {
    'users': handlers.users,
    'products': handlers.products
}

server.listen(3000, function () {
    console.log('server running at localhost:3000');
});
