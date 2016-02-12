import WireCollection from './server/wireCollection';
import _ from 'underscore';

import {
	collectionTypeSymbol,
	generateUniqueID
} from './utilities';

export default class Wire {
	constructor(server) {
		this.io = require('socket.io').listen(server);
		this.collections = [];
		this.count = 0;

		setInterval(() => {
			this.count++;
		}, 200);

		this.io.on('connection', socket => {
 			console.log("Wire got connection from someone..");

			socket.on('global', message => {
				console.log("Message from client: ", message);
			});

			socket.on('wireMessage', options => {
				var collection = _.findWhere(this.collections, {name: options.collectionType});

				if (collection && collection[options.actionType]) {
					var result = collection[options.actionType](options.data);
					socket.emit(`wireMessage`, {actionType: options.actionType, data: result});
				} else {
					socket.emit(`wireMessage`, {actionType: options.actionType, error: 'Collection not found!'})
				}
			});
		});
	}

	collection(name, methods) {
		var collectionInstance = new WireCollection(name, methods, this.io);
		this.collections.push(collectionInstance);

		return collectionInstance;
	}

	publish(name, options) {

	}

	register(name) {

	}
}