require('dotenv').config({ path: './my.env' });
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const dbUrl = process.env.MONGODB;
const connectDB = async () => {
	await mongoose.connect(dbUrl, {
		useNewUrlParser: true,
		useUnifiedTopology: true
	});
};
connectDB()
	.then(() => console.log('Connected to Database'))
	.catch(e => console.log(e));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(3000, () => {
	console.log('server started at port 3000');
});
