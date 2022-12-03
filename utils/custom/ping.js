const axios = require('axios');
const chalk = require('chalk');

async function ping() {
	try {
		const res = await axios.get(
			'https://node-chat-server-qkuiprdusq-em.a.run.app/ping'
		);
		console.log(chalk.yellowBright.bgCyan(res.data.res.toUpperCase()));
		process.exit(0);
	} catch (e) {
		console.log(chalk.red(e.message));
		process.exit(0);
	}
}

module.exports = ping;
