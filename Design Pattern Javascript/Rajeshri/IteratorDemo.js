/********************************************************************
 * Iterator design pattern
 ********************************************************************/ 

var Iterator = function(myArray) {
	this.myArray = myArray;
	this.index = 0;
};

Iterator.prototype = {
	first : function() {
		this.index = 0;
	},
	next : function() {
		return this.myArray[this.index++];
	},
	hasNext : function() {
		return this.index <= this.myArray.length - 1;
	},
	currentItem : function() {
		return this.myArray[this.index];
	}
};

function run() {
	var myArray = [ 125, 263, 785, 45 ];
	var itr = new Iterator(myArray);

	for (var i = itr.first(); itr.hasNext(); i = itr.next()) {
		console.log(itr.currentItem());
	}
}

run();