import WireCollection from './server/wireCollection';

import {
	collectionTypeSymbol,
	generateUniqueID
} from './utilities';

var wireEvents = ['Query', 'Update', 'Insert', 'Destroy'];

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

			wireEvents.forEach(wireEvent => {
				socket.on(wireEvent, () => console.log(this.count));
			});
		});
	}

	collection(name) {
		return new WireCollection(name, this.io);
	}

	publish(name, options) {

	}

	register(name) {

	}
}