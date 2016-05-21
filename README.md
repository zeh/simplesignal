# Simple Signal

This is a super-simple signals class inspired by [Robert Penner's AS3Signals](http://github.com/robertpenner/as3-signals).

## Install

```
$ npm install simplesignal
```

## Usage

You create signals that other classes subscribe to. Example:

```
// Include (JavaScript ES5)
var SimpleSignal = require('simplesignal').default;

// Include (JavaScript ES6, TypeScript)
import SimpleSignal from 'simplesignal';

// Declare, inside MyClass
public onSomethingHappened = new SimpleSignal();

// Subscribe, outside MyClass
myClassObject.onSomethingHappened.add(function(id) {
	console.log("Something happened with id" + id
});

// Dispatch, inside MyClass
onSomethingHappened.dispatch("some-id");
```

## Full reference (JS)

```
// Create
onSomethingHappened = new SimpleSignal();

// Subscribe
onSomethingHappened.add(myFunc);

// Unsubscribe
onSomethingHappened.remove(myFunc);

// Clear subscribers
onSomethingHappened.removeAll();

// Number of subscribers
console.log(onSomethingHappened.numItems);

// Dispatch
onSomethingHappened.dispatch(...args)
```