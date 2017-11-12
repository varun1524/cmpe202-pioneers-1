## Composite Design Pattern-

The Composite pattern is a structural design pattern describes a group of objects that is treated the same way as a single instance of the same type of object.  This is a GoF design pattern describing a parent-child strong relationship where the child can be a simple node or a container of other nodes (possibly containing other children).

### Implementation in Game:
We have used Composite Design Pattern as we are using Javascript for developing the game. In scenes 1.js and Scene2.js files, we have implemented Composite Design Pattern. This provides loose coupling to support well-structured code.


Each item in the collection can hold other collections themselves, creating deeply nested structures. We can treat the whole collection of objects the same way we would treat any of the individual objects in the collection.
Trees, Platform, Enemy, and Collectibles are the Components in the game, which consists of other components (leaf).
 
 
 
 


