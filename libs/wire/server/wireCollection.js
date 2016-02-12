var requiredMethods = ['insert', 'update', 'destroy'];

export default class WireCollection {
	constructor(name, methods) {
		this.name = name;

		requiredMethods.forEach(method => {
			if (methods[method]) {
				this[method] = methods[method];
			} else {
				throw `Caution: ${method} collection missing the ${method} method!`;
			}
		});
	}
}