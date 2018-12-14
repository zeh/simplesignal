var SimpleSignal = require("./../../dist/SimpleSignal.umd");

var acc = 0;
function myFunc(val) {
	acc += val;
}
function myOtherFunc(val) {
	acc -= val;
}

describe("SimpleSignal (ES5)", function() {
	test("is a class", function() {
		expect(SimpleSignal).not.toBe("function");
	});

	test("can be instantiated", function() {
		expect(new SimpleSignal()).toBeDefined();
	});

	test("adds and removes", () => {
		var signal = new SimpleSignal();

		expect(signal.numItems).toEqual(0);
		expect(signal.add(myFunc)).toEqual(true);
		expect(signal.numItems).toEqual(1);
		expect(signal.add(myFunc)).toEqual(false);
		expect(signal.numItems).toEqual(1);
		expect(signal.remove(myOtherFunc)).toEqual(false);
		expect(signal.numItems).toEqual(1);
		expect(signal.remove(myFunc)).toEqual(true);
		expect(signal.numItems).toEqual(0);
		expect(signal.remove(myOtherFunc)).toEqual(false);
		expect(signal.numItems).toEqual(0);
		expect(signal.add(myFunc)).toEqual(true);
		expect(signal.numItems).toEqual(1);
		expect(signal.removeAll()).toEqual(true);
		expect(signal.numItems).toEqual(0);
		expect(signal.removeAll()).toEqual(false);
		expect(signal.numItems).toEqual(0);
	});

	test("dispatches correctly", () => {
		var signal = new SimpleSignal();
		acc = 0;

		signal.add(myFunc);
		signal.dispatch(1);
		expect(acc).toEqual(1);
		signal.dispatch(2);
		expect(acc).toEqual(3);
	});
});
