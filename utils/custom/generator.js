const fs = require('fs');
const chalk = require('chalk');
const path = require('path');

let templatePath = path.join(__dirname, '../template');

async function getTemplateInfo() {
	const inquirer = (await import('inquirer')).default;
	console.log(chalk.blue('Welcome to the DAT Project generator'));
	console.log(
		chalk.green.bgBlackBright.bold(
			'Enter the options to create your project'
		)
	);

	inquirer
		.prompt([
			{
				type: 'rawlist',
				name: 'template',
				message: 'Select a template',
				loop: true,
				choices: ['node-mongoose-setup']
			},
			{
				type: 'input',
				name: 'projectName',
				message: 'Enter the project name'
			},
			{
				type: 'input',
				name: 'path',
				message: 'Enter the path to create the project',
				default: process.cwd(),
				filter: ans => {
					if (ans != process.cwd()) {
						return process.cwd() + '\\' + ans;
					} else return ans;
				}
			}
		])
		.then(answers => generateTemplate(answers))
		.then(() => process.exit(0))
		.catch(e => console.log(e));
}

function generateTemplate(answers) {
	try {
		console.log(answers.path);
		if (fs.existsSync(answers.path)) {
			if (fs.existsSync(answers.path + '\\' + answers.projectName)) {
				console.log(chalk.red('Project with this name already exists'));
				process.exit(0);
			} else {
				fs.mkdirSync(answers.path + '\\' + answers.projectName);
			}
		} else {
			console.log(chalk.red('Path does not exist'));
			process.exit(0);
		}
		templatePath = path.join(templatePath, answers.template);
		const filesToCreate = fs.readdirSync(templatePath);
		let commands;
		filesToCreate.forEach(file => {
			const origPath = path.join(templatePath, file);
			const stats = fs.statSync(origPath);
			if (file !== 'commands.json') {
				if (stats.isFile()) {
					let contents = fs.readFileSync(origPath, 'utf8');
					const writePath = path.join(
						answers.path + '\\' + answers.projectName,
						file
					);
					fs.writeFileSync(writePath, contents, 'utf-8');
				}
			} else {
				commands = JSON.parse(fs.readFileSync(origPath));
			}
		});
		//here we can also add the command to install the dependencies
		console.log(chalk.yellow('Project created successfully'));
		console.log(chalk.cyan(commands.setup));
		console.log(chalk.green(commands.changes));
		//give the command list to run the template
	} catch (e) {
		console.log(e);
		console.log(chalk.red("Couldn't create the project"));
		process.exit(1);
	}
}

exports.generator = async () => {
	await getTemplateInfo();
};
