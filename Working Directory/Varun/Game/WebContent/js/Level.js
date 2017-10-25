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
	this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
	this.scale.pageAlignHorizontally = true;
	this.scale.pageAlignVertically = true;
//	this.stage.backgroundColor = '#ffffff';
};

Level.prototype.preload = function() {
	this.load.pack("Level", "assets/pack.json");
};

Level.prototype.create = function() {
	// to change this code: Canvas editor > Configuration > Editor > userCode > Create
	this.scene = new Scene1(this.game);
//	this.add.sprite(100, 100, "player");
};

/* --- end generated code --- */
