/**
 * Level state.
 */
function Level1() {
	Phaser.State.call(this);
	// TODO: generated method.
}

/** @type Phaser.State */
var proto = Object.create(Phaser.State.prototype);
Level1.prototype = proto;
Level1.prototype.constructor = Level1;

Level1.prototype.preload = function() {
	// TODO: generated method.
};

Level1.prototype.create = function() {
	this.add.text(10, 10, "hello world!", {
		fill : "#fff"
	});
};

Level1.prototype.update = function() {
	// TODO: generated method.
};