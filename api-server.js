var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
  if('GET' !== req.method) return res.end('GET only');

  res.writeHead(200, { 'Content-Type': 'application/json' });

  var path = url.parse(req.url);
  // IDK why the parse isn't working.
  var time = path.query.split("=")[1];

  switch(path.pathname) {
    case '/api/parsetime':
      var time_res = {
        'hour' : new Date(time).getHours(),
        'minute' : new Date(time).getMinutes(),
        'second': new Date(time).getSeconds()
      };

      return res.end(JSON.stringify(time_res));
      break;
    case '/api/unixtime':
      var time_res = {
        'unixtime': new Date(time).getTime()
      }
      return res.end(JSON.stringify(time_res));
      break;
    default:
      res.writeHead(404);
      return res.end('Bad url');
  }
});

server.listen(8000);
