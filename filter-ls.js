module.exports = function(dir, extension, callback) {
  var fs = require('fs');

  fs.readdir(dir, function(err, files) {
    if(err) return callback.apply(null, [err]);

    var filtered = [];
    files.forEach(function(file) {
      if(file.indexOf('.' + extension) > 0) {
        filtered.push(file);
      }
    });

    return callback.apply(null, [err, filtered]);
  });
};