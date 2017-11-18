# User Story for Level-1


## Scenario - 01 - Level1 Happy Path

 Given that the user/player/player able to start and play the game(Halloween Night)  

 When user/player starts the game with level1  
 Then user/player should be able to see the game's level1 background as given in UI wireframe  
 And user/player should be able to see the game's player(wizard) object as given in UI wireframe.  
 And user/player should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
 And user/player should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
 And user/player should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
 And user/player should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
 And user/player should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
 And user/player should be able to see the level1 finish line as given in UI wireframe.  
    
When user/player plays the game with player(wizard) object	in level1 and uses forward arrow key  
Then user/player able to move player in forward direction  
And user/player able to see player walk animation in forward direction  
And game camera moves along with player object with forward direction  
And user/player able to see player not able to move beyond world bounds  
	
When user/player plays the game with player(wizard) object	in level1 and uses backward arrow key  
Then user/player able to move player in backward direction  
And user/player able to see player walk animation in backward direction  
And game camera moves along with player object in backward direction  
And user/player able to see player not able to move beyond world bounds  
	
When user/player plays the game with player(wizard) object	in level1 and uses up arrow key  
Then user/player able to jump the player object  
And user/player able to see player only jump animation in respective direction  
And game camera moves along with player object in respective direction  
	
When user/player plays the game with player(wizard) object	in level1 and collides with a collectible(pumpkin) object  
Then user/player able to see the collectible disappear, so user can only collect a collectible once  
And user/player able to see score increase by a quantity of 1  

When user/player plays the game with player(wizard) object	in level1 and collides with a platform(brick/rock) object  
Then user/player able to stand on the platform object  
And game camera moves along with the player  

When user/player plays the game with player(wizard) object	in level1 and collides with a enemy(ghost) object  
Then user/player able to see the player die with ghost winning animation  
And user/player able to see player die animation
	
When user/player plays the game with player(wizard) object	in level1 and collides with the level1 finish line  
And user/player has minimum score required.  
Then user/player able to see the player completing level1 of game  
And user/player able to see level2 of game.
	
## Scenario - 02 - Player movement Error scenario

Given that the user/player able to start and play the game(Halloween Night)  

When user/player starts the game with level1  
Then user/player should be able to see the game's level1 background as given in UI wireframe  
    And	user/player should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	user/player should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And user/player should be able to see the level1 finish line as given in UI wireframe.  
    
When user/player plays the game with player(wizard) object	in level1 and uses forward arrow key  
Then user/player able to move player in forward direction  
	And user/player able to see player walk animation in forward direction  
	And game camera moves along with player object with forward direction  
	And user/player able to see player able to move beyond world bounds(not allowed -- error)  
	
	
## Scenario - 03 - Player movement Error scenario


Given that the user/player able to start and play the game(Halloween Night)

When user/player starts the game with level1  
Then user/player should be able to see the game's level1 background as given in UI wireframe  
    And	user/player should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	user/player should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And user/player should be able to see the level1 finish line as given in UI wireframe.  

When user/player plays the game with player(wizard) object	in level1 and uses backward arrow key  
Then user/player able to move player in backward direction    
	And user/player able to see player walk animation in backward direction  
	And game camera moves along with player object in backward direction  
	And user/player able to see player able to move beyond world bounds(not allowed -- error)  

## Scenario - 04 - Probable Collectible collision Error scenario

Given that the user/player able to start and play the game(Halloween Night)

When user/player starts the game with level1  
Then user/player should be able to see the game's level1 background as given in UI wireframe  
    And	user/player should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	user/player should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.    
    And	user/player should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And user/player should be able to see the level1 finish line as given in UI wireframe.  
    
When user/player plays the game with player(wizard) object	in level1 and collides with a collectible(pumpkin) object  
Then user/player able to see the collectible disappear, so user can only collect a collectible once  
	And user/player not able to see score increase by a quantity of 1(not allowed -- error)  
	
## Scenario - 05 - Probable Enemy collision Error scenario

Given that the user/player able to start and play the game(Halloween Night)

When user/player starts the game with level1  
Then user/player should be able to see the game's level1 background as given in UI wireframe  
    And	user/player should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	user/player should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
    And	user/player should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And user/player should be able to see the level1 finish line as given in UI wireframe.  
    
When user/player plays the game with player(wizard) object	in level1 and collides with a enemy(ghost) object  
Then user/player not able to see the player die with ghost winning animation(error)  
	And user/player not able to see player die animation(error)  
	And user/player able to play the game(error)  
	
## Scenario - 06 - Probable Level1 Finish Line collision Error scenario

Given that the user/player able to start and play the game(Halloween Night)

When user/player starts the game with level1  
Then user/player should be able to see the game's level1 background as given in UI wireframe  
   And user/player should be able to see the game's player(wizard) object as given in UI wireframe.  
   And	user/player should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
   And	user/player should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
   And	user/player should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
   And	user/player should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
   And	user/player should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
   And user/player should be able to see the level1 finish line as given in UI wireframe.  
    
When user/player plays the game with player(wizard) object	in level1 and collides with the level1 finish line  
    And user/player has minimum score required.  
Then user/player not able to see the player completing level1 of game(error)  
	And user/player able to play level1(error)  
		
## Sprint Tasks related to User Story

### Sprint 1 (Week 5)

*   Level1 Design - **_Vishwesh_**
*   Player Movements on arrow keys - **_Varun_**
*   Enemy Movements - **_Sunny_**
*   Level2 Design - **_Rajeshri_**
*   Objects & sprites & assets & physics for game (all levels) - **_Rutvik_**

### Sprint 2 (Week 6)

*   Level1 Design (updates)- **_Vishwesh_**
*   Player vs enemy collision - **_Varun_**
*   Collectibles vs Player collision - **_Sunny_**
*   Level2 Design(updates) - **_Rajeshri_**
*   Objects & sprites & assets & physics for game (all levels)(updates), player vs finish collision, player vs platform collision - **_Rutvik_**

### Sprint 3 (Week 7)

*   Score counter using observer pattern - **_Vishwesh_**
*   Player animations (idle, walk, jump) using state pattern - **_Varun_**
*   enemy animations and game object creation using factory pattern - **_Sunny_**
*   Player tasks using chain of responsibility pattern - **_Rajeshri_**
*   enemy tasks using strategy pattern - **_Rutvik_**

### Sprint 4 (Week 8)

*   reset game after player die - **_Vishwesh_**
*   level change from level1 to level2 - **_Varun_**
*   pass score from level1 to level2 - **_Sunny_**
*   kill enemy on collision with players bullets - **_Rajeshri_**
*   game complete animation and world bounds- **_Rutvik_**
