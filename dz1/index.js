var ansi = require('ansi'); 
var cursor = ansi(process.stdout); 
var cli = require('cli-color');
 
console.log(cli.red('We are ready to beep!'));
cursor.beep(); 
console.log(cli.green('Yah!'));
