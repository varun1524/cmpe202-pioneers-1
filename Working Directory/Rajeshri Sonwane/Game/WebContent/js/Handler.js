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