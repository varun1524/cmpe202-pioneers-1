//Observer Pattern 
class CountObserver{

	constructor() {
	this.observerCount = 0;  // observers
 
	}

	subscribe(count) {
		this.observerCount = count;
	}

	unsubscribe(count) {
		this.observerCount = 0;
	}

	increaseCount() {
		this.observerCount++;
		return this.observerCount;
	}
	
}
