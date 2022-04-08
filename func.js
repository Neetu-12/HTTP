const http=require("http")
const func_=require("./func_")

http.createServer((req,res)=>{
    res.writeHead(200,{'Content-Type':'text/plain'})
    res.write(func_.add(2,3).toString())
    res.end(func_.mult(2,3).toString())

})
.listen(8000,()=>{
    console.log("listening 8000 port");
})