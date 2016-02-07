export default class WireCollection {
	constructor(name, io) {
		this.io = io; this.name = name;
	}

	query() {
		this.io.emit(`wireQuery:${this.name}`, {error: "Query function missing.."});
	}

	update() {
		this.io.emit(`wireUpdate:${this.name}`, {error: "Update function missing.."});
	}

	insert() {
		this.io.emit(`wireInsert:${this.name}`, {error: "Insert function missing.."});
	}

	destroy() {
		this.io.emit(`wireDestroy${this.name}`, {error: "Destroy function missing.."});
	}
}