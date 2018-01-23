var readline = require('readline'),
	net = require('net'),
	Person = require('./Person.js');

var rl = readline.createInterface(process.stdin, process.stdout);

var server = net.createServer(function (socket) {
	socket.write('Hey d00d\r\n');

	socket.on('data', (data) => {
		printLine(data.toString());
	});


	rl.on('line', function (line) {
		if (line == "exit") {
			socket.destroy();
			rl.close();
			process.exit();
			return;
		}
		socket.write(line);
		rl.prompt();
	});
});

server.listen(1337, '127.0.0.1');
function printLine(msg) {
	process.stdout.clearLine();
	process.stdout.cursorTo(0);
	console.log(msg);
	rl.prompt(true);
}