import io from 'socket.io-client/socket.io';
import ImmutableCollection from './client/immutableCollection';

import {
	collectionTypeSymbol,
	generateUniqueID
} from './utilities';

export default class WireClient {
	constructor(serverUrl, options = {jsonp: false}) {
		this.io = io.connect(serverUrl);

		this.io.on('connect', response => {
			this.io.emit('global', {message: "Hello server!"});
		})
	}

	collection(name, collectionDriver = ImmutableCollection) {
		return collectionDriver(name, collectionDriver);
	}

	subscribe(name, options) {

	}

	run() {

	}

	query(type, options, callback) {

	}

	login(account, secret, callback) {

	}
}