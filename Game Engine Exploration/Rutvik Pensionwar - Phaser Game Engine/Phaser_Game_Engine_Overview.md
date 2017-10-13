## What is Phaser?
* A MIT licensed 2-D framework targeting HTML5 and JS with a goal to be great on mobile and desktop as well. 

* It requires a JS object with three parameters in it, viz. preload, create and update. Preload for loading assets, create for creating sprites and update for responding to input and animate. Preload can load logos and other assets. Create will add the asset we created and update is used to plan your sprite actions every frame. 

### Sprite
* Something we move around on the screen usually on top of some sort of background. 

### Texture Atlas
* Lets you work with many related images (like animation frames) w/o making separate network requests for each image.

* One large atlas image composed of many smaller images
* Metadata about each small image inside the atlas image (File name | Width/Height | X/Y position inside the atlas image)

### Physics group
* Groups in Phaser are like factories to your sprite that will give you new sprites with common properties damped out on them. They will also keep track of all of the children you use so that collision detection will be made easier in future.

### Engines
* Phaser has different physics engine built-in like ARCADE, etc. ARCADE can help you with body velocity, overlap detection and many more.

### Phaser: Text vs BitMap (How to render text on the screen)

* Text objects which uses web fonts. This type of text uses a local hidden canvas object and render the text on it. Then it makes a texture from this and renders it  into the view. Just one disadvantage - it’s damn slow and you can only display forms that are currently loaded and available to the browser. Advantages are that it’s very easy to set shadows, fills and other effects to your text objects.

* The other way is very fancy and efficient way but more difficult to set up which is called the Bitmap text. It works by taking a texture file and then XML or JSON file that describes a phone structure. It creates a new spray object for each letter of the text given to render. The downside is that they are less flexible than the text objects. You can’t set shadows and you can’t use webfonts even. However, it a lot faster to render text with an addon to create custom fonts as well.
	
* We can use Littera tool to render text using Bitmap.
