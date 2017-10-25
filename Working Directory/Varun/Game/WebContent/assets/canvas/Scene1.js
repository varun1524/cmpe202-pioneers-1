
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
	
	
	var BG = this.game.add.tileSprite(-172, -233, 1000, 750, 'BG', null, this);
	BG.scale.setTo(1.2388787593597599, 1.1360282940928768);
	
	this.game.add.tileSprite(-1, 161, 128, 93, 'tiles', '13', this);
	
	this.game.add.tileSprite(126, 161, 384, 93, 'tiles', '14', this);
	
	this.game.add.tileSprite(508, 160, 128, 93, 'tiles', '15', this);
	
	this.game.add.sprite(148, 34, 'player', 0, this);
	
	
	
}

/** @type Phaser.Group */
var Scene1_proto = Object.create(Phaser.Group.prototype);
Scene1.prototype = Scene1_proto;
Scene1.prototype.constructor = Scene1;

/* --- end generated code --- */
// -- user code here --
