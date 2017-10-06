import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Bundaran here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Bundaran extends Actor
{
    private int jeda=5;
    public void addedToWorld(World Latar){
        GreenfootImage image = new GreenfootImage(100, 100);
        image.setColor(new Color(255,255,0,180));
        image.fillOval(0,0,image.getWidth()-1,image.getHeight()-1);
        image.fillOval(20,20,image.getWidth()-1,image.getWidth()-1);
        setImage(image);
        jeda=5;
    }
    
    public void act() 
    {
        if(jeda>0)jeda--;
        else getWorld().removeObject(this);
    }    
}
