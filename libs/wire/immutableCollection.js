import {
	collectionTypeSymbol,
	generateUniqueID
} from './utilities';

export default class ImmutableCollection {
	constructor(collectionName, wireSocket) {
		this.collectionName = collectionName;
		this.store = [];
		this.socket = wireSocket;

		this.startListenSocketEvent();
	}

	startListenSocketEvent() {
		this.socket.on(`wireQuery:${this.collectionName}`, (response) => {

		});

		this.socket.on(`wireInsert:${this.collectionName}`, (response) => {

		});

		this.socket.on(`wireUpdate:${this.collectionName}`, (response) => {

		});

		this.socket.on(`wireDestroy:${this.collectionName}`, (response) => {

		});
	}

	find(predicate, limit) {

	}

	findOne(predicate) {

	}

	insert(instance) {
		instance[collectionTypeSymbol] = this.collectionName;
		instance.id = generateUniqueID();
		this.socket.emit(`wireInsert`, instance);
	}

	update(id, options) {
		this.socket.emit(`wireUpdate`, {id, options});
	}

	destroy(id) {
		this.socket.emit(`wireDestroy`, id)
	}
}

