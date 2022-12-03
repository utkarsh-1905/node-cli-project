require('dotenv').config({ path: './config.env' });

const io = require('socket.io-client');
const socket = io.connect(process.env.SOCKETURL);

io.on('connection', socket => {
	console.log('a user connected');
	socket.on('disconnect', () => {
		console.log('user disconnected');
	});
});
