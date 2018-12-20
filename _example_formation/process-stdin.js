var os = require('os');
var readline = require('readline');
var rl = readline.createInterface({input: process.stdin, output: process.stdout, terminal: false});

console.log(__dirname,__filename)
console.log(os.uptime());
console.log(process.platform);
rl.on('line', function(line) {
    console.log(line);
})