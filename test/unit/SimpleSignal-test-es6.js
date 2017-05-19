import { expect } from "chai";
import SimpleSignal from "./../../dist/SimpleSignal";

let acc = 0;
function myFunc(val) {
	acc += val;
}
function myOtherFunc(val) {
	acc -= val;
}

describe("SimpleSignal (ES6)", () => {
	it("is a class", function() {
		expect(SimpleSignal).to.not.a.function;
	});

	it("can be instantiated", () => {
		expect(new SimpleSignal()).to.be.defined;
	});

	it("adds and removes", () => {
		const signal = new SimpleSignal();

		expect(signal.numItems).to.equal(0);
		expect(signal.add(myFunc)).to.equal(true);
		expect(signal.numItems).to.equal(1);
		expect(signal.add(myFunc)).to.equal(false);
		expect(signal.numItems).to.equal(1);
		expect(signal.remove(myOtherFunc)).to.equal(false);
		expect(signal.numItems).to.equal(1);
		expect(signal.remove(myFunc)).to.equal(true);
		expect(signal.numItems).to.equal(0);
		expect(signal.remove(myOtherFunc)).to.equal(false);
		expect(signal.numItems).to.equal(0);
		expect(signal.add(myFunc)).to.equal(true);
		expect(signal.numItems).to.equal(1);
		expect(signal.removeAll()).to.equal(true);
		expect(signal.numItems).to.equal(0);
		expect(signal.removeAll()).to.equal(false);
		expect(signal.numItems).to.equal(0);
	});

	it("dispatches correctly", () => {
		const signal = new SimpleSignal();
		acc = 0;

		signal.add(myFunc);
		signal.dispatch(1);
		expect(acc).to.equal(1);
		signal.dispatch(2);
		expect(acc).to.equal(3);
	});
});
