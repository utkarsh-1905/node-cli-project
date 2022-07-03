const meow = require('meow');
const meowHelp = require('cli-meow-help');

const flags = {
	clear: {
		type: `boolean`,
		default: true,
		alias: `c`,
		desc: `Clear the console`
	},
	noClear: {
		type: `boolean`,
		default: false,
		desc: `Don't clear the console`
	},
	debug: {
		type: `boolean`,
		default: false,
		alias: `d`,
		desc: `Print debug info`
	},
	version: {
		type: `boolean`,
		alias: `v`,
		desc: `Print CLI version`
	},
	joke: {
		type: `string`,
		alias: 'j',
		default: 'history',
		desc: 'Category of joke'
	},
	alljoke: {
		type: `boolean`,
		alias: 'a',
		default: false,
		desc: 'Show all joke categories'
	},
	username: {
		type: `string`,
		alias: 'u',
		desc: 'Enter your username to participate in the chat'
	},
	room: {
		type: `string`,
		alias: 'r',
		desc: 'Enter the room name to join'
	},
	color: {
		type: `string`,
		alias: 'c',
		desc: '(OPTIONAL) Enter the color to use in the chat',
		default: 'blue'
	}
};

const commands = {
	help: { desc: `Print help info` },
	joke: { desc: `Prints a random Chuck Norris joke` },
	chat: { desc: `To start chatting` },
	ping: { desc: `To check the server status` }
};

const helpText = meowHelp({
	name: `bhidu`,
	flags,
	commands
});

const options = {
	inferType: true,
	description: false,
	hardRejection: false,
	flags
};
module.exports = meow(helpText, options);
