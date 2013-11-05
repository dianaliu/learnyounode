var net = require('net');
var moment = require('moment');

var server = net.createServer(function(socket) {
  var time = moment(new Date()).format('YYYY-MM-DD HH:mm');
  socket.end(time + '\n');
});

server.listen(8000);