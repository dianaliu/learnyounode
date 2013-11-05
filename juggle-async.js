var http = require('http');
var concat = require('concat-stream');

var urls = process.argv.slice(2);
var responses = new Array(urls.length);
var count = 0;

urls.forEach(function(url, index) {
  http.get(url, function(resp) {
    resp.setEncoding('utf8');
    resp.pipe(concat(function(data) {
      responses[index] = data;

      if(3 == ++count) {
        responses.forEach(function(r) {
          console.log(r);
        });
      }
    }));
  });
});