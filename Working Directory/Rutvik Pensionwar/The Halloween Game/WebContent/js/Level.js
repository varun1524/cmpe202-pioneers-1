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

Level.prototype.init = function () {
	
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
	//this.stage.backgroundColor = '#ffffff';

	this.physics.startSystem(Phaser.Physics.ARCADE);
	this.physics.arcade.gravity.y = 800;

};

Level.prototype.preload = function () {
	
	this.load.pack('level', 'assets/pack.json');
	
};

Level.prototype.create = function () {

	this.scene = new HalloweenLevel1(this.game);
	
	// set the physics properties of the collision sprites

	this.scene.fCollisionLayer.setAll("body.immovable", true);
	this.scene.fCollisionLayer.setAll("body.allowGravity", false);
	// hide all objects of the collision layer
	this.scene.fCollisionLayer.setAll("renderable", false);

	this.cursors = this.input.keyboard.createCursorKeys();
};


Level.prototype.update = function() {

	this.physics.arcade.collide(this.scene.fIdle, this.scene.fCollisionLayer);
	
	if (this.cursors.left.isDown) {
		// move to the left
		this.scene.fIdle.body.velocity.x = -200;
	} else if (this.cursors.right.isDown) {
		// move to the right
		this.scene.fIdle.body.velocity.x = 200;
	} else {
		// dont move in the horizontal
		this.scene.fIdle.body.velocity.x = 0;
	}

	// a flag to know if the player is (down) touching the platforms
	var touching = this.scene.fIdle.body.touching.down;

	if (touching && this.cursors.up.isDown) {
		// jump if the player is on top of a platform and the up key is pressed
		this.scene.fIdle.body.velocity.y = -600;
	}
};