/*******************************************************************************
 * Chain Of Responsibility design pattern
 ******************************************************************************/ 

var ConcreteHandler1  = function() {};
var ConcreteHandler2  = function() {};
var ConcreteHandler3  = function() {};
var ConcreteHandler4  = function() {};

var Handler = function() {
	this.next = {
		handleRequest : function(request) {
			console.log('All requests exhausted.');
		}
	},
	this.setNext = function(next) {
		this.next = next;
		return next;
	}
};

ConcreteHandler1.prototype = new Handler();
ConcreteHandler2.prototype = new Handler();
ConcreteHandler3.prototype = new Handler();
ConcreteHandler4.prototype = new Handler();

ConcreteHandler1.prototype.handleRequest = function(request) {
	console.log('R1 got the request...');
	if (request == 1) {
		return;
	}
	this.next.handleRequest(request);
};

ConcreteHandler2.prototype.handleRequest = function(request) {
	console.log('R2 got the request...');
	if (request == 2) {
		return;
	}
	this.next.handleRequest(request);
};

ConcreteHandler3.prototype.handleRequest = function(request) {
	console.log('R3 got the request...');
	if (request == 3) {
		return;
	}
	this.next.handleRequest(request);
};

ConcreteHandler4.prototype.handleRequest = function(request) {
	console.log('R4 got the request...');
	if (request == 4) {
		return;
	}
	this.next.handleRequest(request);
};

var ChainOfResPrototype = {
	handleRequest : function(request) {
		var ch_1 = new ConcreteHandler1();
		var ch_2 = new ConcreteHandler2();
		var ch_3 = new ConcreteHandler3();
		var ch_4 = new ConcreteHandler4();

		ch_1.setNext(ch_2).setNext(ch_3).setNext(ch_4);
		ch_2.handleRequest(3);
	}
};

var obj = Object.create(ChainOfResPrototype);
obj.handleRequest();