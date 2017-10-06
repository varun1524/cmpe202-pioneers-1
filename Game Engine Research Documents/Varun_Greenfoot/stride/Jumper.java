import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class jumper here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Jumper extends Actor
{
    
    
    private final int GRAVITY= 1;
    private int velocity;
    
    public Jumper()
    {
        velocity=4;        
    }
    
    public void act() 
    {
        // Add your action code here.
        fall();
        if(Greenfoot.isKeyDown("space") && isOnSolidGround())
        {
            jump();
        }
        move();
    }    
    
    public void fall()
    {
        setLocation(getX(),getY()+velocity);
        if(isOnSolidGround())
        {
            velocity=0;
            while (isOnSolidGround()){
                
            }
        }
        else if(didBumpHead())
        {
            System.out.println(velocity);
            velocity=0; 
        }
        else
        {
            velocity+=GRAVITY;
        }
    }
    
    public void jump()
    {
        velocity=-20;
    }
    
    public void move()
    {
        int x = getX();
        int y = getY();
        if(Greenfoot.isKeyDown("left"))
        {
            x=x-3;
        }
        if(Greenfoot.isKeyDown("right"))
        {
            x=x+3;
        }
        
        setLocation(x,y);
    }
    
    public boolean isOnSolidGround()
    {
        boolean isOnGround=false;
        if(getY()>getWorld().getHeight()-50) isOnGround=true;
        int imageWidth= getImage().getHeight();
        int imageHeight=getImage().getWidth();;
        
        if(getOneObjectAtOffset(imageWidth/ -2, imageHeight/ 2, Platform.class) != null ||
        getOneObjectAtOffset(imageWidth/ 2, imageHeight/ 2, Platform.class) != null)
        {
            isOnGround=true;
        }
        return isOnGround;
    }
    
    public boolean didBumpHead()
    {
        boolean isHeadBumped=false;
        int imageWidth= getImage().getHeight();
        int imageHeight=getImage().getWidth();;
        
        if(getOneObjectAtOffset(imageWidth/ 2, imageHeight/ -2, Platform.class) != null ||
        getOneObjectAtOffset(imageWidth/ 2, imageHeight/ -2, Platform.class) != null)
        {
            isHeadBumped=true;
        }
        return isHeadBumped;
    }

}
