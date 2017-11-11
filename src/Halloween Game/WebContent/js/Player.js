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
	
	this.moveBody = function(speed, playerbody){
		console.log(speed);
		if(speed==="left"){
			console.log("Player goes Left");
			playerbody.body.velocity.x = -200;
			playerbody.scale.x = -1;	
		}
		else if(speed==="right"){
			console.log("Player goes Right");
			playerbody.body.velocity.x = 200;
			playerbody.scale.x = 1;
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
	
	this.moveBody = function(speed, playerbody){
		playerbody.body.velocity.y = -700;
	};
	
	this.getState = function(){
		return "jump";
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