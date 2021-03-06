
// -- user code here --

/* --- start generated code --- */

// Generated by Phaser Editor v1.4.2 (Phaser v2.6.2)


/**
 * Scene1.
 * @param {Phaser.Game} aGame A reference to the currently running game.
 * @param {Phaser.Group} aParent The parent Group (or other {@link DisplayObject}) that this group will be added to.    If undefined/unspecified the Group will be added to the {@link Phaser.Game#world Game World}; if null the Group will not be added to any parent.
 * @param {string} aName A name for this group. Not used internally but useful for debugging.
 * @param {boolean} aAddToStage If true this group will be added directly to the Game.Stage instead of Game.World.
 * @param {boolean} aEnableBody If true all Sprites created with {@link #create} or {@link #createMulitple} will have a physics body created on them. Change the body type with {@link #physicsBodyType}.
 * @param {number} aPhysicsBodyType The physics body type to use when physics bodies are automatically added. See {@link #physicsBodyType} for values.
 */
function Scene1(aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType) {
	
	Phaser.Group.call(this, aGame, aParent, aName, aAddToStage, aEnableBody, aPhysicsBodyType);
	var _BG = this.game.add.sprite(-18, -27, 'BG', null, this);
	_BG.scale.setTo(1.2388787593597599, 1.1360282940928768);
	
	this.game.add.tileSprite(416, 598, 384, 93, 'tiles', '14', this);
	
	this.game.add.sprite(288, 598, 'tiles', '13', this);
	
	this.game.add.sprite(800, 598, 'tiles', '15', this);
	
	var _player = this.game.add.sprite(520, 444, 'player', 0, this);
	this.game.physics.arcade.enable(_player);
	_player.body.setSize(84.5, 91.66665649414062, 53.3333740234375, 43.333343505859375);
	
	var _collisionLayer = this.game.add.physicsGroup(Phaser.Physics.ARCADE, this);
	
	this.game.add.tileSprite(288, 607, 639, 21, 'tiles', 'physics', _collisionLayer);
	
	
	
	// public fields
	
	this.fPlayer = _player;
	this.fCollisionLayer = _collisionLayer;
	
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Scene1;

/* --- end generated code --- */

// you can insert code here

