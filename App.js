const http = require("node:http");
// console.log(http);

const Server=http.createServer((req,res)=>{
    console.log(req);
    // console.log("serveris runing")
return;
});

Server.listen(8080,()=>console.log("server is runing on PORT: 8080"));

