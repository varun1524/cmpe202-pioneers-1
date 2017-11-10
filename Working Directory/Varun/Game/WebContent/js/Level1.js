/**
 * Level state.
 */
function Level() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Level.prototype = proto;
Level.prototype.constructor = Level;
var tween1 = null;
var player = null;
Level.prototype.init = function() {

	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	//this.world.resize(3000, 1400);
	this.world.setBounds(0, 0, 3000, 1400);

	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 800;

	// Disable base collision 
	this.physics.arcade.checkCollision.up = false;
	this.physics.arcade.checkCollision.down = false;
	
};

Level.prototype.preload = function() {

	this.load.pack("level", "assets/pack.json");

};

Level.prototype.create = function() {

	this.scene = new Scene1(this.game);
	
		
	// Enable collisionWorldBound for Player
	this.scene.fPlayer.body.collideWorldBounds = true;
	
	// Enale outOfBoundKill for Player
	this.scene.fPlayer.checkWorldBounds = true;
	this.scene.fPlayer.outOfBoundKill = true;
	
	this.playerdied = false;
	// camera
	this.camera.follow(this.scene.fPlayer, Phaser.Camera.FOLLOW_PLATFORMER);

	// background
	// this.scene.fBack.fixedToCamera = true;

	// set the physics properties of the collision sprites
	this.scene.fCollisionLayer.setAll("body.immovable", true);
	this.scene.fCollisionLayer.setAll("body.allowGravity", false);
	this.scene.fEnemy.setAll("body.allowGravity", false);

	// hide all objects of the collision layer
	this.scene.fCollisionLayer.setAll("renderable", false);
	this.scene.fCollisionLayer.setAll("body.checkCollision.left", false);
	this.scene.fCollisionLayer.setAll("body.checkCollision.right", false);
	this.scene.fCollisionLayer.setAll("body.checkCollision.down", false);

	this.scene.fCollectibles.setAll("body.allowGravity", false);
	this.scene.fCollectibles.setAll("anchor.x", 0.5);
	this.scene.fCollectibles.setAll("anchor.y", 0.5);

	this.count = 0;
	this.collectiblecount = this.add.text(70, 16, '0', { fontSize: '32px', fill: '#FF4500' });
	this.collectiblecount.fixedToCamera = true;

	this.cursors = this.input.keyboard.createCursorKeys();
	this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	this.game.add.tween(this.scene.fEnemy1).to({x: 2325}, 2400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy2).to({x: 800}, 4000, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy3).to({x: 100}, 4400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy6).to({x: 400}, 4400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy5).to({x: 600}, 1400, 'Sine.easeInOut', true, 0 , -1, true);

	
	player = new Player(this.scene.fPlayer);

	// to keep the fruits in the air
//	this.scene.fFruits.setAll("body.allowGravity", false);
//	this.scene.fFruits.setAll("anchor.x", 0.5);
//	this.scene.fFruits.setAll("anchor.y", 0.5);

	// water
//	this.add.tween(this.scene.fWater.tilePosition).to({
//	x : 25
//	}, 2000, "Linear", true, 0, -1, true);
};

Level.prototype.update = function() {
	if(player.getState()=="die"){
		console.log("Died");
		player.play();
		player.moveBody();
//		this.scene.fPlayer.play("die");
//		this.scene.fPlayer.body.velocity.x = 0;
	}
	else{
		// collide the player with the platforms
		this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);
		
		//this.scene.fPlayer.checkCollision.down = false;
		
		this.doTweenUpdates();

		if (this.cursors.left.isDown) {
			if(player.getState!=="walk"){
				player.change("walk");	
			}
			player.moveBody("left");
			
			// move to the left
//			this.scene.fPlayer.body.velocity.x = -200;
		} else if (this.cursors.right.isDown) {
			// move to the right
			if(player.getState!=="walk"){
				player.change("walk");	
			}
			player.moveBody("right");
//			this.scene.fPlayer.body.velocity.x = 200;
		} else {
			// dont move in the horizontal
//			this.scene.fPlayer.body.velocity.x = 0;
			console.log(player.getState());
			if(player.getState()!="idle"){
				player.change("idle");	
			}
			else{
				console.log("trie");
			}			
			player.moveBody();
		}

		// a flag to know if the player is (down) touching the platforms
		var touching = this.scene.fPlayer.body.touching.down;

		if (touching && this.cursors.up.isDown) {
			// jump if the player is on top of a platform and the up key is pressed
			if(player.getState()!="jump"){
				player.change("jump");
			}
			player.moveBody();
//			this.scene.fPlayer.body.velocity.y = -700;
		}

		if (touching) {
			if (player.getState()=="idle") {
				// if it is not moving horizontally play the idle
//				this.scene.fPlayer.play("idle");
				player.play();
			} else {
				// if it is moving play the walk
				player.play();
			}
		} 
		else {
			// it is not touching the platforms so it means it is jumping.
//			this.scene.fPlayer.play("jump");
			player.play();
		}

//		// update the facing of the player
//		if (this.cursors.left.isDown) {
//			// face left
//			this.scene.fPlayer.scale.x = -1;
//		} else if (this.cursors.right.isDown) {
//			// face right
//			this.scene.fPlayer.scale.x = 1;
//		}

		if(this.spaceKey.isDown){
			this.scene.fPlayer.play("attack");
		}

		this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fEnemy,
				this.playerVsEnemies, null, this);


		this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fCollectibles,
				this.playerVsCollectibles, null, this);
	}
};

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

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            fruit
 */

Level.prototype.playerVsCollectibles = function(player, collectible) {
	collectible.body.enable = false;

	this.add.tween(collectible).to({
		y : collectible.y - 50
	}, 1000, "Expo.easeOut", true);

	this.add.tween(collectible.scale).to({
		x : 2,
		y : 2
	}, 1000, "Linear", true);

	this.add.tween(collectible).to({
		alpha : 0.2
	}, 1000, "Linear", true).onComplete.add(collectible.kill, collectible);

	this.count++;
	this.collectiblecount.text = this.count;
};

Level.prototype.playerVsEnemies = function(_player, enemies) {
	enemies.body.enable = false;
	this.playerdied = true;
	
	if(player.getState()!="die"){
		player.change("die");
		player.play();
		player.moveBody();
	}

	this.add.tween(enemies).to({
		y : enemies.y - 50
	}, 1000, "Expo.easeOut", true);

	this.add.tween(enemies.scale).to({
		x : 2,
		y : 2
	}, 1000, "Linear", true);

	this.add.tween(enemies).to({
		alpha : 0.2
	}, 1000, "Linear", true).onComplete.add(enemies.kill, enemies);

};

Level.prototype.doTweenUpdates = function(){


	if(this.scene.fEnemy1.x === 2621)
	{
		this.scene.fEnemy1.scale.x = -0.22;

	}
	if(this.scene.fEnemy1.x === 2325)
	{
		this.scene.fEnemy1.scale.x = 0.22;

	}

	if(this.scene.fEnemy6.x === 1174)
	{
		this.scene.fEnemy6.scale.x = -0.29;

	}
	if(this.scene.fEnemy6.x === 400)
	{
		this.scene.fEnemy6.scale.x = 0.29;

	}

	if(this.scene.fEnemy5.x === 600)
	{
		this.scene.fEnemy5.scale.x = -0.19;

	}
	if(this.scene.fEnemy5.x === 872)
	{
		this.scene.fEnemy5.scale.x = 0.19;

	}


	if(this.scene.fEnemy2.x === 800)
	{
		this.scene.fEnemy2.scale.x = -0.2;

	}
	if(this.scene.fEnemy2.x === 1739)
	{
		this.scene.fEnemy2.scale.x = 0.2;

	}

	if(this.scene.fEnemy3.x === 100)
	{
		this.scene.fEnemy3.scale.x = 0.23;

	}
	if(this.scene.fEnemy3.x === 1090)
	{
		this.scene.fEnemy3.scale.x = -0.23;

	}
}

