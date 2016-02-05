//import redis from 'redis';

import {
	collectionTypeSymbol,
	generateUniqueID
} from '../libs/wire/utilities';

var io, socketClients = [];
	//redisPub = redis.createClient(),
	//redisSub = redis.createClient();

export function injectSocketProtocol(server) {
	io = require('socket.io').listen(server);

	io.on('connection', socket => {
		console.log('someone connected!');
	});
}