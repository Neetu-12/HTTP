const http=require("http")
const fs=require("fs")

http.createServer((req,res)=>{
    fs.readFile('./h2.html',(err,data)=>{
        res.writeHead(200,{'Content-Type':'data'})
        res.write(data)
        res.end()
    })
  
}).listen(8000,()=>{
    console.log("We are listening 8000 port no.");
})
