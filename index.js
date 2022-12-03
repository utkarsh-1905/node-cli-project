#!/usr/bin/env node

/**
 * Utkarsh
 * Automation
 *
 * @author Utkarsh Tripathi <https://utkarshdev.netlify.app>
 */

const init = require('./utils/init');
const cli = require('./utils/cli');
const log = require('./utils/log');

const input = cli.input;
const flags = cli.flags;
const { clear, debug } = flags;
const chalk = require('chalk');

const { showJoke } = require('./utils/custom/joke');
const chat = require('./utils/custom/chat');
const ping = require('./utils/custom/ping');
const { generator } = require('./utils/custom/generator');

(async () => {
	try {
		init({ clear });
		if (input.length === 0) {
			process.exit(0);
		} else if (input.length === 1 && input.includes(`help`)) {
			cli.showHelp(0);
		} else if (input.length === 1 && input.includes(`joke`)) {
			showJoke(flags.joke, flags.alljoke);
		} else if (input.length === 1 && input.includes(`chat`)) {
			chat(flags.username, flags.room, flags.color);
		} else if (input.length === 1 && input.includes(`ping`)) {
			ping();
		} else if (input.length === 1 && input.includes(`generator`)) {
			generator();
		} else {
			console.log(chalk.red('Invalid command'));
			process.exit(0);
		}

		debug && log(flags);
	} catch (e) {
		console.log(e);
		process.exit(0);
	}
})();
