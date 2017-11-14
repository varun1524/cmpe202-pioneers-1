/*
 * factory
 * 
 */
class Factory {
	
	constructor(self){
		
		console.log("factory");
		this.scene = self.scene;
		console.log(this.scene);
	}
	
	getObject(name){
		
		switch(name){
		
		case "player" : {
			return this.scene.fPlayer;
			break;
			}
		
		case "collisionLayer" : {
			return this.scene.fCollisionLayer;
			break;
			}

		case "collectibles" : {
			return this.scene.fCollectibles;
			break;
			}

		case "enemy" : {
			return this.scene.fEnemy;
			break;
			}

		case "enemy1" : {
			return this.scene.fEnemy1;
			break;
			}

		case "enemy2" : {
			return this.scene.fEnemy2;
			break;
			}

		case "enemy3" : {
			return this.scene.fEnemy3;
			break;
			}

		case "enemy4" : {
			return this.scene.fEnemy4;
			break;
			}
		
		case "enemy5" : {
			return this.scene.fEnemy5;
			break;
			}
		
		case "enemy6" : {
				return this.scene.fEnemy6;
				break;
				}
		
		default: return null;
			
		}
	}
	
}
