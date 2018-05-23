const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    fs.readFile('./index.html', (err, data) => {
        fs.readFile('error.jpg', (err, img) => {
            if(req.method === 'GET' && req.url === '/home') {
                res.setHeader('Content-Type', "text/html; charset=utf-8");
                res.write(data);
                res.end();
            } else {
                res.setHeader('Content-Type', "image/jpeg; charset=utf-8");
                res.statusCode = 404;
                res.write(img);
                res.end();
            }
        });
    });
});

server.listen(9000)
