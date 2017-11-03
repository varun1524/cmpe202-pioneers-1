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
var data = null;
var tween = null;
Level.prototype.init = function() {

	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;

	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 800;

};


Level.prototype.preload = function() {

	this.load.pack("level", "assets/pack.json");

};

Level.prototype.create = function() {

	this.scene = new HolloweenLevel1(this.game);

	// set the physics properties of the collision sprites
	this.scene.fPhysicsGroup.setAll("body.immovable", true);
	this.scene.fPhysicsGroup.setAll("body.allowGravity", false);
	// hide all objects of the collision layer
	this.scene.fPhysicsGroup.setAll("renderable", false);
	this.scene.fEnemyGroup.setAll("body.allowGravity", false);
	this.cursors = this.input.keyboard.createCursorKeys();

	    //  Here we'll tween the values held in the tweenData object to x: 500, y: 300
	   //var tween = game.make.tween(this.scene).to( { x: 100, y: 400 }, 2000, "Sine.easeInOut");
	  this.game.add.tween(this.scene.fEnemy2).to({x: 240}, 5400, 'Sine.easeInOut', true, 0 , -1, true);
	    //  Set the tween to yoyo so it loops smoothly
	   // tween.yoyo(true);
	   var tweenData = { x: 0, y: 0 };

	    //  Here we'll tween the values held in the tweenData object to x: 500, y: 300
	    tween = this.game.make.tween(tweenData).to( { x: 100, y: 400 }, 2000, "Sine.easeInOut");

	    //  Set the tween to yoyo so it loops smoothly
	    tween.yoyo(true);
	    data = tween.generateData(60);

	};

	
Level.prototype.update = function() {
	// TODO: generated method.
	this.physics.arcade.collide(this.scene.fPlayer, this.scene.fPhysicsGroup);
	this.physics.arcade.collide(this.scene.fEnemy1, this.scene.fPhysicsGroup);
	this.physics.arcade.collide(this.scene.fEnemy2, this.scene.fPhysicsGroup);
//	this.physics.arcade.collide(this.scene.fFinalPlayer, this.scene.fPhysicsGroup);
	
	
	if (this.cursors.left.isDown) {
		
		// move to the left
		this.scene.fPlayer.body.velocity.x = -200;
//		this.scene.fFinalPlayer.body.velocity.x = -200;
	} else if (this.cursors.right.isDown) {
		// move to the right
		this.scene.fPlayer.body.velocity.x = 200;
//		this.scene.fFinalPlayer.body.velocity.x = 200;
	} else {
		// dont move in the horizontal
		this.scene.fPlayer.body.velocity.x = 0;
//		this.scene.fFinalPlayer.body.velocity.x = 0;
	}

	// a flag to know if the player is (down) touching the platforms
	var touching = this.scene.fPlayer.body.touching.down;

	if (touching && this.cursors.up.isDown) {
		// jump if the player is on top of a platform and the up key is pressed
		this.scene.fPlayer.body.velocity.y = -600;
	}
	
//	var touching1 = this.scene.fFinalPlayer.body.touching.down;
//
//	if (touching1 && this.cursors.up.isDown) {
//		// jump if the player is on top of a platform and the up key is pressed
////		this.scene.fFinalPlayer.body.velocity.y = -600;
//	}
//	
	 
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
//	
//	if (touching1) {
//	    if (this.scene.fFinalPlayer.body.velocity.x == 0) {
//	        // if it is not moving horizontally play the idle
//	        this.scene.fFinalPlayer.play("idle");
//	    } else {
//	        // if it is moving play the walk
//	        this.scene.fFinalPlayer.play("walk");
//	    }
//	} else {
//	    // it is not touching the platforms so it means it is jumping.
//	    this.scene.fFinalPlayer.play("jump");
//	}
//	
	if (this.cursors.left.isDown) {
	    // face left
	    this.scene.fPlayer.scale.x = -0.1;
	} else if (this.cursors.right.isDown) {
	   // face right
	   this.scene.fPlayer.scale.x = 0.1;
	}
};