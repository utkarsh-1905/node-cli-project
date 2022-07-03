const axios = require('axios');
const chalk = require('chalk');

async function ping() {
	try {
		const res = await axios.get(
			'https://node-cli-chat-server.herokuapp.com/ping'
		);
		console.log(chalk.yellowBright.bgCyan(res.data.res.toUpperCase()));
		process.exit(0);
	} catch (e) {
		console.log(chalk.red(e.message));
		process.exit(0);
	}
}

module.exports = ping;
