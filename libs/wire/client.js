import io from 'socket.io-client/socket.io';

import {
	collectionTypeSymbol,
	generateUniqueID
} from './utilities';

export default class WireClient {
	constructor(serverUrl, options = {jsonp: false}) {
		var socket = this.socket = io.connect(serverUrl);

		socket.on('connect', response => {
			socket.emit('global', {message: "Hello server!"});
		})
	}

	login(account, secret, callback) {

	}

	registerCollection(collectionName) {

	}

	subscribe() {

	}

	query(type, options, callback) {

	}

	run() {

	}
}