
const express = require('express');
const app = express();
const http = require('http');
const fs = require('fs');
const port = 3000;

const server = http.createServer(function(req, res){
    const url = req.url;
    console.log(url);
    res.writeHead(200, { 'Content-Type': 'text/html'});
    fs.readFile('public/index.html', function (error, data) {
        if(error){
            res.writeHead(404);
            res.write('Error: File not found...');
        } else {
            res.write(data);
        }
        res.end();
    });

    res.writeHead(200, { 'Content-Type': 'text/css'});
    fs.readFile('dist/css/style.css', function (error, data) {
        if(error){
            res.writeHead(404);
            res.write('Error: File not found...');
        } else {
            res.write(data);
        }
        res.end();
    });

});
function css(request, response) {
    if (request.url === '/styles.css') {
        response.writeHead(200, {'Content-type' : 'text/css'});
        var fileContents = fs.readFileSync('./views/styles.css', {encoding: 'utf8'});
        response.write(fileContents);
    }
}
var servers = http.createServer(function (request, response) {
    router.css(request, response);
});
server.listen(3000);

server.listen(port, function (error) {
    if(error){
        console.log('Something went wrong', error);
    } else {
        console.log('Server working with this port: ' + port);
    }
});