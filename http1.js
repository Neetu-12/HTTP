const http=require("http")
http.createServer((req,res)=>{
    res.write("This is my 2nd web")
    res.end()
})
.listen(5000,()=>{
    console.log("this is server");
})
