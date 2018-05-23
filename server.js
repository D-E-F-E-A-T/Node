const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', "text/html; charset=utf-8");
    fs.readFile('./index.html', (err, data) => {
        if(req.method === 'GET' && req.url === '/hello') {
            res.write(data);
            res.end();
        } else {
            res.statusCode = 404;
            res.write('<h1>404: Zła ścieżka!</h1>')
        }
    })

});

server.listen(9000)
