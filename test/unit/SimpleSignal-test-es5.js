var expect = require('chai').expect;
var SimpleSignal = require("./../../dist/SimpleSignal.commonjs.js");

var acc = 0;
function myFunc(val) {
	acc += val;
}
function myOtherFunc(val) {
	acc -= val;
}

describe("SimpleSignal (ES5)", function() {
	it("is a class", function() {
		expect(SimpleSignal).to.not.a.function;
	});

	it("can be instantiated", function() {
		expect(new SimpleSignal()).to.be.defined;
	});

	it("adds and removes", () => {
		var signal = new SimpleSignal();

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
		var signal = new SimpleSignal();
		acc = 0;

		signal.add(myFunc);
		signal.dispatch(1);
		expect(acc).to.equal(1);
		signal.dispatch(2);
		expect(acc).to.equal(3);
	});
});
