const axios = require('axios');
const chalk = require('chalk');

exports.showJoke = async (type, showCat) => {
	if (showCat) {
		showAllCategories();
		process.exit(0);
	} else {
		const res = await axios.get(
			`https://api.chucknorris.io/jokes/random?category=${type}`
		);
		console.log(chalk.bold.underline.greenBright(res.data.value));
		process.exit(0);
	}
};

const showAllCategories = () => {
	const res = [
		'animal',
		'career',
		'celebrity',
		'dev',
		'explicit',
		'fashion',
		'food',
		'history',
		'money',
		'movie',
		'music',
		'political',
		'religion',
		'science',
		'sport',
		'travel'
	];
	console.log(chalk.bold.underline.red(res));
};
