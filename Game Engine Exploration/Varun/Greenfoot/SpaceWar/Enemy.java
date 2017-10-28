import greenfoot.*;  // (World, Actor, GreenfootImage, Greenfoot and MouseInfo)

/**
 * Write a description of class Enemy here.
 * 
 * @author (your name) 
 * @version (a version number or a date)
 */
public class Enemy extends Actor
{
    private int vx=0;
    private boolean toRemove=false;
    
    public Enemy()
    {
        
    }
    
    public Enemy(int v)
    {
        vx=v;
    }
    
    public void move(){
        setLocation(getX()+vx,getY());
        Actor actor = getOneIntersectingObject(Rocket.class);
        if(actor!=null){
            ((Rocket)actor).Hancur();
        }
        if(getX()<200)toRemove=true;        
    }
    
    public void addedToWorld(World Latar){
        setRotation(180);
    }
    
    public void Hancur()
    {
        System.out.println(Greenfoot.getRandomNumber(40));
        for(int i=0; i<10; i++){
            int px= -20+Greenfoot.getRandomNumber(40);
            int py= -20+Greenfoot.getRandomNumber(40);
            getWorld().addObject(new Pecahan(getImage()),getX()+px,getY()+py);
        }
        getWorld().addObject(new Bundaran(),getX(),getY());
        toRemove=true;
    }
    
    public void act() 
    {
        if(!toRemove)move();
        else getWorld().removeObject(this);
    }    
}
