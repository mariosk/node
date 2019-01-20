var http = require('http');

var server = http.createServer(function(req, res) {
res.writeHead(200);
res.end('Hello to all kubernetes-workshop participants!');
});
server.listen(8080);
