/**
 * Level.
 */
function Level() {
	Phaser.State.call(this);
}

/** @type Phaser.State */
var Level_proto = Object.create(Phaser.State.prototype);
Level.prototype = Level_proto;
Level.prototype.constructor = Level;

Level.prototype.init = function() {
	
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	
	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 800;
	
	this.stage.backgroundColor = '#ffffff';
};

Level.prototype.preload = function() {
	this.load.pack("Level", "assets/pack.json");
};

Level.prototype.create = function() {
//	// to change this code: Canvas editor > Configuration > Editor > userCode > Create
//	this.scene = new Scene1(this.game);
//	
//	this.scene.fCollisionLayer.setAll("body.immovable", true);
//	this.scene.fCollisionLayer.setAll("body.allowGravity", false);
//	// hide all objects of the collision layer
//	this.scene.fCollisionLayer.setAll("renderable", false);
//	
////	this.scene.fPlayer
////	this.add.sprite(100, 100, "player");

	// collide the player with the platforms
	this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);

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
		this.scene.fPlayer.body.velocity.y = -600;
	}
};

Level.prototype.update = function() {
	this.physics.arcade.collide(this.scene.fPlayer, this.scene.fCollisionLayer);
};

/* --- end generated code --- */
