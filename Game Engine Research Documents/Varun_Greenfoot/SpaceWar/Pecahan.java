import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Pecahan here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Pecahan extends Actor
{
    /**
     * Act - do whatever the Pecahan wants to do. This method is called whenever
     * the 'Act' or 'Run' button gets pressed in the environment.
     */
    public int vx=0,vy=0,rot=0;
    
    public Pecahan(GreenfootImage img){
        GreenfootImage image=new GreenfootImage(10,10);
        image.drawImage(img, -Greenfoot.getRandomNumber(img.getWidth()),-Greenfoot.getRandomNumber(img.getHeight()));
        setImage(image);
    }
    
    public void addedToWorld(World Latar){
        vx=-5+Greenfoot.getRandomNumber(10);
        vy=-5+Greenfoot.getRandomNumber(10);
        vx=-10+Greenfoot.getRandomNumber(20);
        if(vx==0)vx=1;
        if(vy==0)vy=1;
}
    
    public void act() 
    {
        setLocation(getX()+vx,getY()+vy);
        setRotation(getRotation()+rot);
        if(getX() < -200 || getY() < -200 || getX()> getWorld().getWidth()+200 || getY()>getWorld().getHeight()+200){
            getWorld().removeObject(this);
        }
    }    
}
