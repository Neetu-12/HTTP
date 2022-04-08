const http=require("http")
http.createServer((req,res)=>{
    res.write("This is my first web")
    res.end()
})
.listen(4000,()=>{
    console.log("this is server");
})
