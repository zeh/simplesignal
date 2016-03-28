/**
 * @author zeh fernando
 */
export default class SimpleSignal<F extends Function> {

	// Properties
	private functions:Array<F> = [];

	// Temp variables
	private ifr:number;


	// ================================================================================================================
	// CONSTRUCTOR ----------------------------------------------------------------------------------------------------

	constructor() {
	}


	// ================================================================================================================
	// PUBLIC INTERFACE -----------------------------------------------------------------------------------------------

	public add(func:F):boolean {
		if (this.functions.indexOf(func) === -1) {
			this.functions.push(func);
			return true;
		}
		return false;
	}

	public remove(func:F):boolean {
		this.ifr = this.functions.indexOf(func);
		if (this.ifr > -1) {
			this.functions.splice(this.ifr, 1);
			return true;
		}
		return false;
	}

	public removeAll():boolean {
		if (this.functions.length > 0) {
			this.functions.length = 0;
			return true;
		}
		return false;
	}

	public dispatch(...args:any[]):void {
		let functionsDuplicate:Array<Function> = this.functions.concat();
		for (let i = 0; i < functionsDuplicate.length; i++) {
			functionsDuplicate[i].apply(undefined, args);
		}
	}


	// ================================================================================================================
	// ACCESSOR INTERFACE ---------------------------------------------------------------------------------------------

	public get numItems():number {
		return this.functions.length;
	}
}
