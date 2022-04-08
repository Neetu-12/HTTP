var http = require('http');

http.createServer(function (req, res) {
  // res.writeHead(200, {'Content-Type': 'text/html'});
  //Return the url part of the request object:
  res.write("Hii Neetu");
  res.end();
}).listen(4000,()=>{
  console.log("8000 listen port are using");
});
