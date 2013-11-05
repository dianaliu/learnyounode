var fs = require('fs');

var buffer = fs.readFileSync(process.argv[2]);
console.log(buffer.toString().split('\n').length - 1);


var numLines = fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1;
// console.log(numLines);

