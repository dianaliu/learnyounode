var http = require('http');
var map = require('through2-map');

var server = http.createServer(function(req, res) {
  if('POST' != req.method) { return res.end('POST only'); }

  req.pipe(map(function(chunk) {
    return chunk.toString().toUpperCase();
  })).pipe(res);

});

server.listen(8000);
