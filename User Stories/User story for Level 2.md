# User Story for Level-2


## Scenario - 01 - Level2 Happy Path

 Given that the user/player able to start and play the game(Halloween Night)  
 And player completed level1 of game 

 When User starts the game with level2  
 Then User should be able to see the game's level2 background as given in UI wireframe  
 And User should be able to see the game's player(wizard) object as given in UI wireframe.  
 And User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
 And User should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
 And User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
 And User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
 And User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.
 And User should be able to see the score carry-forwarded from level1.  
 And User should be able to see the level2 finish line as given in UI wireframe.  
    
When User plays the game with player(wizard) object	in level2 and uses forward arrow key  
Then User able to move player in forward direction  
And User able to see player walk animation in forward direction  
And game camera moves along with player object with forward direction  
And User able to see player not able to move beyond world bounds  
	
When User plays the game with player(wizard) object	in level2 and uses backward arrow key  
Then User able to move player in backward direction  
And User able to see player walk animation in backward direction  
And game camera moves along with player object in backward direction  
And User able to see player not able to move beyond world bounds  
	
When User plays the game with player(wizard) object	in level2 and uses up arrow key  
Then User able to jump the player object  
And User able to see player only jump animation in respective direction  
And game camera moves along with player object in respective direction  
	
When User plays the game with player(wizard) object	in level2 and collides with a collectible(pumpkin) object  
Then User able to see the collectible disappear, so user can only collect a collectible once  
And User able to see score increase by a quantity of 1  

When User plays the game with player(wizard) object	in level2 and collides with a platform(brick/rock) object  
Then User able to stand on the platform object  
And game camera moves along with the player  

When User plays the game with player(wizard) object	in level2 and collides with a enemy(ghost) object  
Then User able to see the player die with ghost winning animation  
And User able to see player die animation  
And User should be able to start the game from level1
	
When User plays the game with player(wizard) object	in level2 and collides with the level2 finish line  
And user has minimum score required.  
Then User able to see the player completing level2 of game  
And User able to complete game successfully.
	
## Scenario - 02 - Player movement Error scenario

Given that that the user/player able to start and play the game(Halloween Night)  

When User starts the game with level2  
Then User should be able to see the game's level2 background as given in UI wireframe  
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And User should be able to see the level2 finish line as given in UI wireframe.  
    
When User plays the game with player(wizard) object	in level2 and uses forward arrow key  
Then User able to move player in forward direction  
	And User able to see player walk animation in forward direction  
	And game camera moves along with player object with forward direction  
	And User able to see player able to move beyond world bounds(not allowed -- error)  
	
	
## Scenario - 03 - Player movement Error scenario


Given that the user/player able to start and play the game(Halloween Night)

When User starts the game with level2  
Then User should be able to see the game's level2 background as given in UI wireframe  
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And User should be able to see the level2 finish line as given in UI wireframe.  

When User plays the game with player(wizard) object	in level2 and uses backward arrow key  
Then User able to move player in backward direction    
	And User able to see player walk animation in backward direction  
	And game camera moves along with player object in backward direction  
	And User able to see player able to move beyond world bounds(not allowed -- error)  

## Scenario - 04 - Probable Collectible collision Error scenario

Given that the user/player able to start and play the game(Halloween Night)

When User starts the game with level2  
Then User should be able to see the game's level2 background as given in UI wireframe  
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.    
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And User should be able to see the level2 finish line as given in UI wireframe.  
    
When User plays the game with player(wizard) object	in level2 and collides with a collectible(pumpkin) object  
Then User able to see the collectible disappear, so user can only collect a collectible once  
	And User not able to see score increase by a quantity of 1(not allowed -- error)  
	
## Scenario - 05 - Probable Enemy collision Error scenario

Given that the user/player able to start and play the game(Halloween Night)

When User starts the game with level2  
Then User should be able to see the game's level2 background as given in UI wireframe  
    And	User should be able to see the game's player(wizard) object as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
    And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
    And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
    And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
    And User should be able to see the level2 finish line as given in UI wireframe.  
    
When User plays the game with player(wizard) object	in level2 and collides with a enemy(ghost) object  
Then User not able to see the player die with ghost winning animation(error)  
	And User not able to see player die animation(error)  
	And User able to play the game(error)  
	
## Scenario - 06 - Probable level2 Finish Line collision Error scenario

Given that the user/player able to start and play the game(Halloween Night)

When User starts the game with level2  
Then User should be able to see the game's level2 background as given in UI wireframe  
   And User should be able to see the game's player(wizard) object as given in UI wireframe.  
   And	User should be able to see the game's enemy(ghosts) objects with positions' as given in UI wireframe.  
   And	User should be able to see the game's enemy(ghosts) objects move and change directions respectively.  
   And	User should be able to see the game's collectible(pumpkins) objects with positions' as given in UI wireframe.  
   And	User should be able to see the game's platform(bricks/rocks) objects with positions' as given in UI wireframe.  
   And	User should be able to see the user score as given in UI wireframe, where score = number of collectibles collected.  
   And User should be able to see the level2 finish line as given in UI wireframe.  
    
When User plays the game with player(wizard) object	in level2 and collides with the level2 finish line  
    And user has minimum score required.  
Then User not able to see the player completing level2 of game(error)  
	And User able to play level2(error)  
	
		
					
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
	