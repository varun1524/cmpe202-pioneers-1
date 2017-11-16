/**
 * Level2 state.
 */
function Level2() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Level2.prototype = proto;
Level2.prototype.constructor = Level2;
var tween1 = null;
var player = null;
var totalCollectible = null;
Level2.prototype.init = function() {

	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	// this.world.resize(2200, 1800);
	this.world.setBounds(0, 0, 3000, 1400);

	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 800;

	// Disable base collision 
	this.physics.arcade.checkCollision.up = false;
	this.physics.arcade.checkCollision.down = false;
};

Level2.prototype.preload = function() {
	this.load.pack("level", "assets/pack.json");
};

Level2.prototype.create = function() {

	this.scene = new Scene2(this.game);

	var fac = new Factory(this);
	this.player = fac.getObject('player');
	this.collisionLayer = fac.getObject('collisionLayer');
	this.collectibles = fac.getObject('collectibles');
	this.enemy = fac.getObject('enemy');
	this.enemy1 = fac.getObject('enemy1');
	this.enemy2 = fac.getObject('enemy2');
	this.enemy3 = fac.getObject('enemy3');
	this.enemy4 = fac.getObject('enemy4');
	this.enemy5 = fac.getObject('enemy5');
	this.enemy6 = fac.getObject('enemy6');
	this.enemy7 = fac.getObject('enemy7');
	this.enemy8 = fac.getObject('enemy8');
	this.enemy9 = fac.getObject('enemy9');
	totalCollectible = 16;
	// Enable collisionWorldBound for Player
	this.player.body.collideWorldBounds = true;
	
	// Enale outOfBoundKill for Player
	this.player.checkWorldBounds = true;
	this.player.outOfBoundKill = true;

	this.playerdied = false;
	// camera
	this.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);

	// background
//	this.scene.fBack.fixedToCamera = true;

	// set the physics properties of the collision sprites
	this.collisionLayer.setAll("body.immovable", true);
	this.collisionLayer.setAll("body.allowGravity", false);
	this.scene.fEnemy.setAll("body.allowGravity", false);

	// hide all objects of the collision layer
	this.collisionLayer.setAll("renderable", false);
	this.collisionLayer.setAll("body.checkCollision.left", false);
	this.collisionLayer.setAll("body.checkCollision.right", false);
	this.collisionLayer.setAll("body.checkCollision.down", false);

	this.cursors = this.input.keyboard.createCursorKeys();
	this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	console.log(this.cursors);
	console.log("scene1");
	this.collectibles.setAll("body.allowGravity", false);
	this.collectibles.setAll("anchor.x", 0.5);
	this.collectibles.setAll("anchor.y", 0.5);

	this.count = 0;
	this.collectiblecount = this.add.text(70, 16, '0', { fontSize: '32px', fill: '#FF4500' });
	this.collectiblecount.fixedToCamera = true;

	this.game.add.tween(this.enemy1).to({x: 750}, 2400, 'Sine.easeInOut', true, 0 , -1, true); 
	this.game.add.tween(this.enemy2).to({x: 1550}, 2400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy3).to({x: 500}, 3000, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy4).to({x: 2}, 4400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy5).to({y: 500, x: 120}, 3000, 'Sine.easeIn', true, 0 , -1, true);
	this.game.add.tween(this.enemy6).to({x: 1000}, 5000, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy7).to({x: 1000}, 4000, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy8).to({x: 1050}, 2000, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy9).to({y: 500, x: 1200}, 3000, 'Sine.easeIn', true, 0 , -1, true);

	player = new Player(this.player);
};

Level2.prototype.update = function() {

	if(player.getState()=="die"){
		console.log("Died");
		player.play();
		player.moveBody();
//		this.scene.fPlayer.play("die");
//		this.scene.fPlayer.body.velocity.x = 0;
	}
	else{
		// collide the player with the platforms
		this.physics.arcade.collide(this.player, this.collisionLayer);
		
		//this.scene.fPlayer.checkCollision.down = false;
		
//		this.doTweenUpdates();
		var touching = this.player.body.touching.down;
		console.log("touch:"+touching);
		
		if(touching){
			if (this.cursors.left.isDown) {
				if(player.getState!=="walk"){
					player.change("walk");	
				}
				player.moveBody("left");
				
				// move to the left
	//			this.scene.fPlayer.body.velocity.x = -200;
			} 
			else if (this.cursors.right.isDown) {
				// move to the right
				if(player.getState!=="walk"){
					player.change("walk");	
				}
				player.moveBody("right");
	//			this.scene.fPlayer.body.velocity.x = 200;
			} 
			else {
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
		}
		else{
			if(player.getState()!=="die" && player.getState()!=="jump"){
				player.change("idle");
				if (this.cursors.left.isDown) {
					player.moveDirection("left");
				} 
				else if (this.cursors.right.isDown) {
					player.moveDirection("right");
				}
			}
		}
		// a flag to know if the player is (down) touching the platforms
		var touching = this.player.body.touching.down;

		if (touching && this.cursors.up.isDown) {
			// jump if the player is on top of a platform and the up key is pressed
			if(player.getState()!="jump"){
				player.change("jump");
			}
			player.moveBody();
//			this.scene.fPlayer.body.velocity.y = -700;
			if (this.cursors.left.isDown) {
				player.moveDirection("left");
			} 
			else if (this.cursors.right.isDown) {
				player.moveDirection("right");
			}
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
			if(player.getState()==="jump"){
				if (this.cursors.left.isDown) {
					player.moveDirection("left");
				} 
				else if (this.cursors.right.isDown) {
					player.moveDirection("right");
				}
			}
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
			this.player.play("attack");
		}

		this.physics.arcade.overlap(this.player, this.scene.fEnemy,
				this.playerVsEnemies, null, this);
		
		this.physics.arcade.overlap(this.player, this.enemy,
				this.playerVsEnemies, null, this);

		this.physics.arcade.overlap(this.player, this.collectibles,
				this.playerVsCollectibles, null, this);
	}
};

Level2.prototype.playerVsFinishLine = function(player, finishline) {
	finishline.body.enable = false;
	console.log("On Finish" + this.count);
    if(this.count>=totalCollectible){
    		//Add prompt for Level Completed Successful
    		this.game.time.events.add(800, this.gameOver, this);
    		alert ("Game Completed. Add Prompt for Play Again");
    }
};

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            fruit
 */
Level2.prototype.playerVsCollectibles = function(player, collectible) {
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

Level2.prototype.playerVsEnemies = function(_player, enemies) {
	enemies.body.enable = false;

	if(player.getState()!="die"){
		player.change("die");
		player.play();
		player.moveBody();
		this.game.time.events.add(1000, this.gameOver, this);
		this.game.state.start("Level");
		this.player.reset();
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
