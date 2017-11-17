/**
 *
 */
class Context {
	
	constructor(strategy){
		this.strategy = strategy;
	}

	executeStrategy(self, scale){
		return this.strategy.doOperation(self, scale);
	}
}

