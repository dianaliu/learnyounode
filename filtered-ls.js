var fs = require('fs');

var dir = process.argv[2];
var extension = process.argv[3];
fs.readdir(dir, function(err, files) {
  if(!err) {
    files.forEach(function(file) {
      if(file.indexOf('.' + extension) > 0) {
        console.log(file);
      }
    });
  }
});