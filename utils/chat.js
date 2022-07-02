const io = require('socket.io-client');
const socket = io.connect('https://node-cli-chat-server.herokuapp.com/');
const chalk = require('chalk');
const repl = require('repl');

const commands = ['users', 'admin', 'leave'];

const chat = async (username, room, color) => {
	try {
		if (!username || !room) {
			console.log(chalk.red('Provide username/room'));
			process.exit(0);
		} else {
			socket.emit('joinRoom', { username, room });

			socket.on('connect', () => {
				console.log(
					chalk.yellowBright(
						'=== start chatting (/help to see all commands) ==='
					)
				);
			});
			socket.on('message', data => {
				console.log(
					chalk.cyan(data.time) +
						' : ' +
						chalk.blue(data.username) +
						' : ' +
						chalk.green(data.text)
				);
			});
			socket.on('roomUsers', data => {
				console.log();
				console.log(chalk.greenBright('=== users in room ==='));
				console.log(chalk.green(data.room));
				data.users.forEach(user => {
					console.log(
						chalk.blueBright(user.id) +
							' : ' +
							chalk.blue(user.username)
					);
				});
				console.log(chalk.red('====================='));
				console.log();
			});
			socket.on('roomAdmin', data => {
				console.log(chalk.yellowBright('=== admin in room ==='));
				data.admin.forEach(admin => {
					console.log(chalk.yellow(admin.username));
				});
				console.log(chalk.red('====================='));
			});
			socket.on('userRemoved', data => {
				console.log(
					chalk.red(data.username + '\tremoved\t' + data.text)
				);
				process.exit(0);
			});
			socket.on('disconnect', () => {
				console.log(chalk.red('=== disconnected ==='));
				process.exit(0);
			});
			repl.start({
				prompt: '',
				eval: cmd => {
					cmd = cmd.trim();
					if (
						cmd.startsWith('/') &&
						commands.includes(cmd.slice(1).trim())
					) {
						socket.emit('command', cmd.trim());
						if (cmd.slice(1).trim() === 'leave') {
							process.exit(0);
						}
					} else if (cmd.trim().includes('/addAdmin')) {
						if (cmd.split(' ').length === 2) {
							socket.emit('admin', {
								id: cmd.trim().split(' ')[1],
								cmd: cmd
							});
						} else {
							console.log(chalk.red('Provide only user id'));
						}
					} else if (cmd.trim().includes('/removeUser')) {
						if (cmd.split(' ').length === 2) {
							socket.emit('admin', {
								id: cmd.trim().split(' ')[1],
								cmd: cmd
							});
						} else {
							console.log(chalk.red('Provide only user id'));
						}
					} else if (cmd.trim().includes('/help')) {
						console.log(chalk.cyan('/users - shows users in room'));
						console.log(
							chalk.cyan('/admin - shows admins in room')
						);
						console.log(chalk.yellow('/leave - leave the room'));
						console.log(
							chalk.magenta(
								'/addAdmin <user id> - add admin (only admins can add admins)'
							)
						);
						console.log(
							chalk.magenta(
								'/removeUser <user id> - remove user (only admins can remove users)'
							)
						);
					} else if (!cmd.startsWith('/')) {
						socket.emit('chatMessage', cmd);
					} else {
						console.log(chalk.redBright('Invalid command'));
					}
				}
			});
		}
	} catch (e) {
		console.log(e);
	}
};

module.exports = chat;
