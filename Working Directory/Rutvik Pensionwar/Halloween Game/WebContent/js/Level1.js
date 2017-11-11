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
var bullets = null;
var bulletTime = 0;

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
	
	// 1. load the power
	this.load.image("bullet", "assets/images/power1.png");

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
	
	// 2. Add firekey
	this.fireKey = this.input.keyboard.addKey(Phaser.Keyboard.F);

	this.game.add.tween(this.scene.fEnemy1).to({x: 2325}, 2400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy2).to({x: 800}, 4000, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy3).to({x: 100}, 4400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy6).to({x: 400}, 4400, 'Sine.easeInOut', true, 0 , -1, true);
	this.game.add.tween(this.scene.fEnemy5).to({x: 600}, 1400, 'Sine.easeInOut', true, 0 , -1, true);
	
	
	// 3. Add bullets
	this.bullets = this.game.add.group();
	this.bullets.enableBody = true;
	this.bullets.physicsBodyType = Phaser.Physics.ARCADE;
	this.bullets.createMultiple(30, 'bullet');
	this.bullets.setAll('anchor.x', 0.5);
	this.bullets.setAll('anchor.y', 1);
	this.bullets.setAll('outOfBoundsKill', true);
	this.bullets.setAll('checkWorldBounds', true);
	
	bullets = this.bullets;
	
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
		this.scene.fPlayer.play("die");
		this.scene.fPlayer.body.velocity.x = 0;
	}
	else{
		// collide the player with the platforms
		this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);
		
		//this.scene.fPlayer.checkCollision.down = false;
		
		this.doTweenUpdates();

		if (this.cursors.left.isDown) {
			// move to the left
			this.scene.fPlayer.body.velocity.x = -200;
		} else if (this.cursors.right.isDown) {
			// move to the right
			this.scene.fPlayer.body.velocity.x = 200;
		} else {
			// dont move in the horizontal
			this.scene.fPlayer.body.velocity.x = 0;
		}

		// a flag to know if the player is (down) touching the platforms
		var touching = this.scene.fPlayer.body.touching.down;

		if (touching && this.cursors.up.isDown) {
			// jump if the player is on top of a platform and the up key is pressed
			this.scene.fPlayer.body.velocity.y = -700;
		}

		if (touching) {
			if (this.scene.fPlayer.body.velocity.x == 0) {
				// if it is not moving horizontally play the idle
				this.scene.fPlayer.play("idle");
			} else {
				// if it is moving play the walk
				this.scene.fPlayer.play("walk");
			}
		} else {
			// it is not touching the platforms so it means it is jumping.
			this.scene.fPlayer.play("jump");
		}

		// update the facing of the player
		if (this.cursors.left.isDown) {
			// face left
			this.scene.fPlayer.scale.x = -1;
		} else if (this.cursors.right.isDown) {
			// face right
			this.scene.fPlayer.scale.x = 1;
		}

		if(this.spaceKey.isDown){
			this.scene.fPlayer.play("attack");
		}

		this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fEnemy,
				this.playerVsEnemies, null, this);


		this.physics.arcade.overlap(this.scene.fPlayer, this.scene.fCollectibles,
				this.playerVsCollectibles, null, this);
		
		
		if(this.fireKey.isDown) {
			this.fireBullet();
		}
		
		this.physics.arcade.overlap(this.scene.fEnemy, this.bullets, this.collisionHandler, null, this);
		this.physics.arcade.overlap(this.scene.fEnemy1, this.bullets, this.collisionHandler, null, this);
		this.physics.arcade.overlap(this.scene.fEnemy2, this.bullets, this.collisionHandler, null, this);
		this.physics.arcade.overlap(this.scene.fEnemy3, this.bullets, this.collisionHandler, null, this);
		this.physics.arcade.overlap(this.scene.fEnemy4, this.bullets, this.collisionHandler, null, this);
		this.physics.arcade.overlap(this.scene.fEnemy5, this.bullets, this.collisionHandler, null, this);
		this.physics.arcade.overlap(this.scene.fEnemy6, this.bullets, this.collisionHandler, null, this);
		
		
	}
};

/**
 * @param {Phaser.Sprite}
 *            player
 * @param {Phaser.Sprite}
 *            fruit
 */

Level.prototype.fireBullet = function () {

	this.bullet = bullets.getFirstExists(false);
	
	    if (this.bullet)
	    {
	        //  And fire it
	        this.bullet.reset(this.scene.fPlayer.x, this.scene.fPlayer.y);
	        this.bullet.body.velocity.x = 400;
	        this.bulletTime = Date.now();
	    }
};

Level.prototype.collisionHandler = function (bullet, alien) {

    //  When a bullet hits an alien we kill them both
    //this.bullet.kill();
    //this.alien.kill();

};

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