var http = require('http');

var server = http.createServer(function (request, response) {
	response.writeHead(200, { "Content-Type": "text/plain" });
	response.end("Hello World\n");
});

var port = process.env.port || 8080;
server.listen(port);
console.log("Server running at http://localhost:" + port);