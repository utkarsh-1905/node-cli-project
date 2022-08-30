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
				message: 'Enter the path to the template',
				default: './'
			}
		])
		.then(answers => generateTemplate(answers))
		.then(() => process.exit(0))
		.catch(e => console.log(e));
}

function generateTemplate(answers) {
	try {
		const projectPath = answers.path + answers.projectName;
		if (fs.existsSync(projectPath)) {
			console.log(chalk.red('Project already exists'));
			process.exit(0);
		} else {
			fs.mkdirSync(projectPath);
		}
		templatePath = path.join(templatePath, answers.template);
		const filesToCreate = fs.readdirSync(templatePath);
		filesToCreate.forEach(file => {
			const origPath = path.join(templatePath, file);
			const stats = fs.statSync(origPath);
			if (stats.isFile()) {
				let contents = fs.readFileSync(origPath, 'utf8');
				const writePath = path.join(__dirname, projectPath, file);
				fs.writeFileSync(writePath, contents, 'utf-8');
			}
		});
	} catch (e) {
		console.log(e);
		process.exit(1);
	}
}

exports.generator = async () => {
	await getTemplateInfo();
};
