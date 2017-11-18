/**
 *
 */

//var proto = Object.create(Phaser.State.prototype);
//Player.prototype = proto;
//Player.prototype.constructor = Player;

Player = function (obj){
	
	var idle = new Idle(this);
	var walk = new Walk(this);
	var jump = new Jump(this);
	var die = new Die(this);
	var playerbody = obj;
	var playerstate = idle;
	
	this.play = function(){
		return playerstate.play(playerbody);
	};
	
	this.getState = function(){
		return playerstate.getState();
	};
	
	this.getIdleState = function(){
		return idle;
	};
	
	this.getWalkState = function(){
		return walk;
	};
	
	this.getJumpState = function(){
		return jump;
	};
	
	this.getDieState = function(){
		return die;
	};
	
	this.setState = function (objstate){
		playerstate = objstate;
	};
	
	this.moveBody = function(speed){
		playerstate.moveBody(speed, playerbody);
	};
	
	this.change = function(act){
		playerstate.change(act);		
	}
	
	this.moveDirection = function(direction){
		playerstate.moveDirection(direction, playerbody);
	};
}

Idle = function(playerstate){
	this.playerstate=playerstate;
	
	this.play = function(playerbody){
		playerbody.play("idle");
	};
	
	this.moveBody = function(speed, playerbody){
		playerbody.body.velocity.x = 0;
	};
	
	this.getState = function(){
		return "idle";
	};
	
	this.moveDirection = function(direction, playerbody){
		if(direction==="left"){
			playerbody.scale.x = -1;
			playerbody.body.velocity.x = -200;
		}
		else if(direction==="right"){
			playerbody.scale.x = 1;
			playerbody.body.velocity.x = 200;
		}
	};
	
	this.change = function(act){
		if(act=="walk"){
			playerstate.setState(playerstate.getWalkState());	
		}
		else if(act=="jump"){
			playerstate.setState(playerstate.getJumpState());
		}
		else if(act=="die"){
			playerstate.setState(playerstate.getDieState());
		}
		else if(act=="idle"){
			playerstate.setState(playerstate.getIdleState());
		}			
	};
}

Walk = function (playerstate){
	this.playerstate=playerstate;
	
	this.play = function(playerbody){
		playerbody.play("walk");
	};
	
	this.moveBody = function(direction, playerbody){
//		console.log(direction);
		if(direction==="left"){
//			console.log("Player goes Left");
			
		}
		else if(direction==="right"){
//			console.log("Player goes Right");			
		}
		this.moveDirection(direction, playerbody);
	};
	
	this.moveDirection = function(direction, playerbody){
		if(direction==="left"){
			playerbody.scale.x = -1;
			playerbody.body.velocity.x = -200;
		}
		else if(direction==="right"){
			playerbody.scale.x = 1;
			playerbody.body.velocity.x = 200;
		}
	};
	
	
	
	this.change = function(act){
		if(act=="walk"){
			playerstate.setState(playerstate.getWalkState());	
		}
		else if(act=="jump"){
			playerstate.setState(playerstate.getJumpState());
		}
		else if(act=="die"){
			playerstate.setState(playerstate.getDieState());
		}
		else if(act=="idle"){
			playerstate.setState(playerstate.getIdleState());
		}			
	};
	
	this.getState = function(){
		return "walk";
	};
};

Jump = function (playerstate){
	this.playerstate=playerstate;
	this.play = function(playerbody){
		playerbody.play("jump");
	};
	
	this.moveBody = function(direction, playerbody){
		playerbody.body.velocity.y = -700;
	};
	
	this.getState = function(){
		return "jump";
	};
	
	this.moveDirection = function(direction, playerbody){
		if(direction==="left"){
			playerbody.scale.x = -1;
			playerbody.body.velocity.x = -200;
		}
		else if(direction==="right"){
			playerbody.scale.x = 1;
			playerbody.body.velocity.x = 200;
			
		}
	};
	
	this.change = function(act){
		if(act=="walk"){
			playerstate.setState(playerstate.getWalkState());	
		}
		else if(act=="jump"){
			playerstate.setState(playerstate.getJumpState());
		}
		else if(act=="die"){
			playerstate.setState(playerstate.getDieState());
		}
		else if(act=="idle"){
			playerstate.setState(playerstate.getIdleState());
		}			
	};
};

Die = function (playerstate){
	this.playerstate=playerstate;
	
	this.play = function(playerbody){
		playerbody.play("die");
	};
	
	this.moveBody = function(speed, playerbody){
		playerbody.body.velocity.x = 0;
	};
	
	this.getState = function(){
		return "die";
	};
	
	this.change = function(act){
		if(act=="walk"){
			playerstate.setState(playerstate.getWalkState());	
		}
		else if(act=="jump"){
			playerstate.setState(playerstate.getJumpState());
		}
		else if(act=="die"){
			playerstate.setState(playerstate.getDieState());
		}
		else if(act=="idle"){
			playerstate.setState(playerstate.getIdleState());
		}			
	};
}