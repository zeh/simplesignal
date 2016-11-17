import { expect } from "chai";
import SimpleSignal from "./../../dist/SimpleSignal";

var acc = 0;
function myFunc(val) {
	acc += val;
}

describe("SimpleSignal (ES6)", () => {
	it("is a class", function() {
		expect(SimpleSignal).to.not.a.function;
	});

	it("can be instantiated", () => {
		expect(new SimpleSignal()).to.be.defined;
	});

	it("adds and removes", () => {
		var signal = new SimpleSignal();

		expect(signal.numItems).to.equal(0);
		signal.add(myFunc);
		expect(signal.numItems).to.equal(1);
		signal.add(myFunc);
		expect(signal.numItems).to.equal(1);
		signal.remove(myFunc);
		expect(signal.numItems).to.equal(0);
		signal.add(myFunc);
		expect(signal.numItems).to.equal(1);
		signal.removeAll(myFunc);
		expect(signal.numItems).to.equal(0);
	});

	it("dispatches correctly", () => {
		var signal = new SimpleSignal();
		acc = 0;

		signal.add(myFunc);
		signal.dispatch(1);
		expect(acc).to.equal(1);
		signal.dispatch(2);
		expect(acc).to.equal(3);
	});
});