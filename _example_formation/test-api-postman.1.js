var http = require('http');
const server = http.createServer((req,res) => {
    const url = req.url;
    if(url === '/about') {
        res.write('<h1>about us page</h1>');
        res.end();
    }else if (url === '/contact'){
        res.write('<h1>contact us page</h1>');
        res.end();
    }
}).listen(8080);