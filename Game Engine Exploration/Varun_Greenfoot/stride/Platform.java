import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Platform here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Platform extends Actor
{
    /**
     * Act - do whatever the Platform wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public Platform()
    {
        this(100,25);
    }
    
    public Platform(int width, int height)
    {
        GreenfootImage image= getImage();
        image.scale(width, height);
        setImage(image);
    }
    
    
    public void act() 
    {
        // Add your action code here.
    }    
}
