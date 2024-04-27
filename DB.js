const User = require(User)
const { plainToClass,
     classToPlain } = require('class-transformer');

class SimpleKeyValueDB
{
    constructor()
    {
        this.users = {}; 
    }
    //userId = key
    //userData = value
    setUser(userId, userData)
    {
        let userInstance = new User(userId, userData);
        this.users[userId] = userInstance;
    }
    getUser(userId)
    {
        let userInstance = this.users[userId];
        if(userInstance)
        {
            return classToPlain(userInstance);
        }
        return null; //Returns null if doesn not exists
        
    }
    deleteSpecUser(userId)
    {
        if(this.users.hasOwnProperty(userId)) 
        {
          delete this.users[userId];
          return true; // Successful op
        } 
        else
        {
          return false; // Key does not exist
        }
    }

    clearDB()
    {
        this.users = {};
    }
    
}
