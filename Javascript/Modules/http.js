const http = require("http");

http.createServer((request,response) => {
    console.log(request.headers);   //The data the server needs is present in headers
    response.end("Hello Client!!!")
}).listen(5500);