var expect = require('chai').expect;
var SimpleSignal = require("./../../dist/SimpleSignal.commonjs.js");

var acc = 0;
function myFunc(val) {
	acc += val;
}

describe("SimpleSignal (ES5)", function() {
	it("is a class", function() {
		expect(SimpleSignal).to.not.a.function;
	});

	it("can be instantiated", function() {
		expect(new SimpleSignal()).to.be.defined;
	});

	it("adds and removes", function() {
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
});
