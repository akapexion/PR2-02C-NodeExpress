const http = require("http");

http.createServer((request, response) => {

    response.writeHead(200, { 'Content-Type' : 'application/json' }); //only with API & HTML content/writeHead

    response.write(JSON.stringify([
        {
            success: true,
            status : "OK"
        }
    ]));
    response.end();
}).listen(2000)