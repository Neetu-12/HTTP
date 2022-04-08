// send html file on bowser through the http module...!!!

var http = require('http');
var fs = require('fs');

http.createServer((req, res)=>{
    fs.readFile('h.html', (err,data)=>{
        res.writeHead(200, {'Content-Type': 'data'});
        res.write(data);
        res.end();
    });
}).listen(8000,()=>{
    console.log("listening 8000 port");
})
