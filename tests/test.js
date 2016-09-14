var SimpleSignal = require("../dist/es5/SimpleSignal").default;
var test = require("tape");

var acc = 0;

test('Adding and removing', function (assert) {
	var signal = new SimpleSignal();

	assert.plan(6);

	assert.strictEqual(signal.numItems, 0);
	signal.add(myFunc);
	assert.strictEqual(signal.numItems, 1);
	signal.add(myFunc);
	assert.strictEqual(signal.numItems, 1);
	signal.remove(myFunc)
	assert.strictEqual(signal.numItems, 0);
	signal.add(myFunc);
	assert.strictEqual(signal.numItems, 1);
	signal.removeAll();
	assert.strictEqual(signal.numItems, 0);
});

test('Dispatching', function (assert) {
	var signal = new SimpleSignal();
	acc = 0;

	assert.plan(2);

	signal.add(myFunc);
	signal.dispatch(1);
	assert.strictEqual(acc, 1, "Sum should be 1");
	signal.dispatch(2);
	assert.strictEqual(acc, 3, "Sum should be 3");
});

function myFunc(val) {
	acc += val;
}