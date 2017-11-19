window.onload = function() {
	var game = new Phaser.Game(1200, 800, Phaser.AUTO);
	game.global = {
			 score : 0,
			}
	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Level", Level);
	game.state.add("Level2", Level2);
	game.state.start("Level");
};
