var lsfilterFn = require('./filter-ls.js');
var dir = process.argv[2];
var extension = process.argv[3];

lsfilterFn(dir, extension, function(err, filtered) {
  if(err) {
    console.log('Error: ' + err);
  }

  filtered.forEach(function(f) {
    console.log(f);
  });

});
