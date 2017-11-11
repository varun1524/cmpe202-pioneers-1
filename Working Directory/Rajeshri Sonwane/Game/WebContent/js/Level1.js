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

/*
 * factory
 * 
 */
class factory {
	
	constructor(self){
		this.scene = self.scene;
		console.log(this.scene);
	}
	
	getObject(name){
		
		switch(name){
		
		case "player" : {
			return this.scene.fPlayer;
			break;
			}
		
		case "collisionLayer" : {
			return this.scene.fCollisionLayer;
			break;
			}

		case "collectibles" : {
			return this.scene.fCollectibles;
			break;
			}

		case "enemy" : {
			return this.scene.fEnemy;
			break;
			}

		case "enemy1" : {
			return this.scene.fEnemy1;
			break;
			}

		case "enemy2" : {
			return this.scene.fEnemy2;
			break;
			}

		case "enemy3" : {
			return this.scene.fEnemy3;
			break;
			}

		case "enemy4" : {
			return this.scene.fEnemy4;
			break;
			}
		
		case "enemy5" : {
			return this.scene.fEnemy5;
			break;
			}
		
		case "enemy6" : {
				return this.scene.fEnemy6;
				break;
				}
		
		default: return null;
			
		}
	}
	
}


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
	
	var fac = new factory(this);
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
	
	
	// Enable collisionWorldBound for Player
	this.player.body.collideWorldBounds = true;
	
	// Enale outOfBoundKill for Player
	this.player.checkWorldBounds = true;
	this.player.outOfBoundKill = true;
	
	this.playerdied = false;
	// camera
	this.camera.follow(this.player, Phaser.Camera.FOLLOW_PLATFORMER);

	// background
	// this.scene.fBack.fixedToCamera = true;

	// set the physics properties of the collision sprites
	this.collisionLayer.setAll("body.immovable", true);
	this.collisionLayer.setAll("body.allowGravity", false);
	this.enemy.setAll("body.allowGravity", false);

	// hide all objects of the collision layer
	this.collisionLayer.setAll("renderable", false);
	this.collisionLayer.setAll("body.checkCollision.left", false);
	this.collisionLayer.setAll("body.checkCollision.right", false);
	this.collisionLayer.setAll("body.checkCollision.down", false);

	this.collectibles.setAll("body.allowGravity", false);
	this.collectibles.setAll("anchor.x", 0.5);
	this.collectibles.setAll("anchor.y", 0.5);

	this.count = 0;
	this.collectiblecount = this.add.text(70, 16, '0', { fontSize: '32px', fill: '#FF4500'});
	this.collectiblecount.fixedToCamera = true;

	this.cursors = this.input.keyboard.createCursorKeys();
	this.spaceKey = this.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);

	this.game.add.tween(this.enemy1).to({x: 2325}, 2400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy2).to({x: 800}, 4000, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy3).to({x: 100}, 4400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy6).to({x: 400}, 4400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.enemy5).to({x: 600}, 1400, 'Sine.easeInOut', true, 0 , -1, true);


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
	if(this.playerdied){
		console.log("Died");
		this.player.play("die");
		this.player.body.velocity.x = 0;
	}
	else{
		// collide the player with the platforms
		this.physics.arcade.collide(this.player, this.collisionLayer);
		
		//this.player.checkCollision.down = false;
		
		this.doTweenUpdates();

		if (this.cursors.left.isDown) {
			// move to the left
			this.player.body.velocity.x = -200;
		} else if (this.cursors.right.isDown) {
			// move to the right
			this.player.body.velocity.x = 200;
		} else {
			// dont move in the horizontal
			this.player.body.velocity.x = 0;
		}

		// a flag to know if the player is (down) touching the platforms
		var touching = this.player.body.touching.down;

		if (touching && this.cursors.up.isDown) {
			// jump if the player is on top of a platform and the up key is pressed
			this.player.body.velocity.y = -700;
		}

		if (touching) {
			if (this.player.body.velocity.x == 0) {
				// if it is not moving horizontally play the idle
				this.player.play("idle");
			} else {
				// if it is moving play the walk
				this.player.play("walk");
			}
		} else {
			// it is not touching the platforms so it means it is jumping.
			this.player.play("jump");
		}

		// update the facing of the player
		if (this.cursors.left.isDown) {
			// face left
			this.player.scale.x = -1;
		} else if (this.cursors.right.isDown) {
			// face right
			this.player.scale.x = 1;
		}

		if(this.spaceKey.isDown){
			this.player.play("attack");
		}

		this.physics.arcade.overlap(this.player, this.enemy,
				this.playerVsEnemies, null, this);


		this.physics.arcade.overlap(this.player, this.collectibles,
				this.playerVsCollectibles, null, this);
	}
};

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

Level.prototype.playerVsEnemies = function(player, enemies) {
	enemies.body.enable = false;
	this.playerdied = true;

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


	if(this.enemy1.x === 2621)
	{
		this.enemy1.scale.x = -0.22;

	}
	if(this.enemy1.x === 2325)
	{
		this.enemy1.scale.x = 0.22;

	}

	if(this.enemy6.x === 1174)
	{
		this.enemy6.scale.x = -0.29;

	}
	if(this.enemy6.x === 400)
	{
		this.enemy6.scale.x = 0.29;

	}

	if(this.enemy5.x === 600)
	{
		this.enemy5.scale.x = -0.19;

	}
	if(this.enemy5.x === 872)
	{
		this.enemy5.scale.x = 0.19;

	}


	if(this.enemy2.x === 800)
	{
		this.enemy2.scale.x = -0.2;

	}
	if(this.enemy2.x === 1739)
	{
		this.enemy2.scale.x = 0.2;

	}

	if(this.enemy3.x === 100)
	{
		this.enemy3.scale.x = 0.23;

	}
	if(this.enemy3.x === 1090)
	{
		this.enemy3.scale.x = -0.23;

	}
}