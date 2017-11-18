#User Story for Level-1


##Scenario - 01 - Level1 Happy Path

Given the user/player able to start and play the game(Halloween Night)
When User starts the game with level1
Then User should be able to see the game's level1 background as given in UI wireframe
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.
    And User should be able to see the level1 finish line as given in UI wireframe.
When User plays the game with player(wizard) object	in level1 and uses forward arrow key
Then User able to move player in forward direction
	And User able to see player walk animation in forward direction
	And game camera moves along with player object with forward direction
	And User able to see player not able to move beyond world bounds
When User plays the game with player(wizard) object	in level1 and uses backward arrow key
Then User able to move player in backward direction
	And User able to see player walk animation in backward direction
	And game camera moves along with player object in backward direction
	And User able to see player not able to move beyond world bounds
When User plays the game with player(wizard) object	in level1 and uses up arrow key
Then User able to jump the player object
	And User able to see player only jump animation in respective direction
	And game camera moves along with player object in respective direction
When User plays the game with player(wizard) object	in level1 and collides with a collectible(pumpkin) object
Then User able to see the collectible disappear, so user can only collect a collectible once
	And User able to see score increase by a quantity of 1
When User plays the game with player(wizard) object	in level1 and collides with a platform(brick/rock) object
Then User able to stand on the platform object
	And game camera moves along with the player
When User plays the game with player(wizard) object	in level1 and collides with a enemy(ghost) object
Then User able to see the player die with ghost winning animation
	And User able to see player die animation
When User plays the game with player(wizard) object	in level1 and collides with the level1 finish line
    And user has minimum score required.
Then User able to see the player completing level1 of game
	And User able to see level2 of game.
	
##Scenario - 02 - Player movement Error scenario

Given the user/player able to start and play the game(Halloween Night)
When User starts the game with level1
Then User should be able to see the game's level1 background as given in UI wireframe
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.
    And User should be able to see the level1 finish line as given in UI wireframe.
When User plays the game with player(wizard) object	in level1 and uses forward arrow key
Then User able to move player in forward direction
	And User able to see player walk animation in forward direction
	And game camera moves along with player object with forward direction
	And User able to see player able to move beyond world bounds(not allowed -- error)
	
##Scenario - 03 - Player movement Error scenario

Given the user/player able to start and play the game(Halloween Night)
When User starts the game with level1
Then User should be able to see the game's level1 background as given in UI wireframe
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.
    And User should be able to see the level1 finish line as given in UI wireframe.
When User plays the game with player(wizard) object	in level1 and uses backward arrow key
Then User able to move player in backward direction
	And User able to see player walk animation in backward direction
	And game camera moves along with player object in backward direction
	And User able to see player able to move beyond world bounds(not allowed -- error)

##Scenario - 04 - Probable Collectible collision Error scenario

Given the user/player able to start and play the game(Halloween Night)
When User starts the game with level1
Then User should be able to see the game's level1 background as given in UI wireframe
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.
    And User should be able to see the level1 finish line as given in UI wireframe.
When User plays the game with player(wizard) object	in level1 and collides with a collectible(pumpkin) object
Then User able to see the collectible disappear, so user can only collect a collectible once
	And User not able to see score increase by a quantity of 1(not allowed -- error)
	
##Scenario - 05 - Probable Enemy collision Error scenario

Given the user/player able to start and play the game(Halloween Night)
When User starts the game with level1
Then User should be able to see the game's level1 background as given in UI wireframe
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.
    And User should be able to see the level1 finish line as given in UI wireframe.
When User plays the game with player(wizard) object	in level1 and collides with a enemy(ghost) object
Then User not able to see the player die with ghost winning animation(error)
	And User not able to see player die animation(error)
	And User able to play the game(error)
	
##Scenario - 06 - Probable Level1 Finish Line collision Error scenario

Given the user/player able to start and play the game(Halloween Night)
When User starts the game with level1
Then User should be able to see the game's level1 background as given in UI wireframe
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.
    And User should be able to see the level1 finish line as given in UI wireframe.
When User plays the game with player(wizard) object	in level1 and collides with the level1 finish line
    And user has minimum score required.
Then User not able to see the player completing level1 of game(error)
	And User able to play level1(error)
		
