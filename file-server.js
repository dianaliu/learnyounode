var fs = require('fs');
var http = require('http');

var file = fs.createReadStream(process.argv[2]);

var server = http.createServer(function(req, res) {
  file.pipe(res);
});

server.listen(8000);
