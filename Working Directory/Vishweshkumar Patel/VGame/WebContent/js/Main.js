window.onload = function() {
	var game = new Phaser.Game(1200, 800, Phaser.AUTO);
	game.state.add("Level1", Level1, true);
};
