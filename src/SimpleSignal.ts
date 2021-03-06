// This should be unknown[], but it gives a "Type 'unknown' is not assignable to type 'something'" error.
// eslint-disable-next-line @typescript-eslint/no-explicit-any
type UnknownFunction = (...args: any[]) => unknown;

export default class SimpleSignal<F extends UnknownFunction> {
	// Properties ---

	private functions: F[];

	// Constructor ---

	constructor() {
		this.functions = [];
	}

	// Public ---

	public add(func: F): boolean {
		if (this.functions.indexOf(func) === -1) {
			this.functions.push(func);
			return true;
		}
		return false;
	}

	public remove(func: F): boolean {
		const ifr = this.functions.indexOf(func);
		if (ifr > -1) {
			this.functions.splice(ifr, 1);
			return true;
		}
		return false;
	}

	public removeAll(): boolean {
		if (this.functions.length > 0) {
			this.functions.length = 0;
			return true;
		}
		return false;
	}

	public dispatch(...args: Parameters<F>): void {
		const functionsDuplicate = this.functions.concat();
		functionsDuplicate.forEach((func) => {
			func(...args);
		});
	}

	// Accessor ---

	public get numItems(): number {
		return this.functions.length;
	}
}
