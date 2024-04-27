const { plainToClass, classToPlain } = require('class-transformer');

class User
{

    //CONSTRUCTOR
    constructor(userId, userData)
    {
        this.userId = userId;
        this.userData = userData
    }

    //GETTERS AND SETTERS

    getUserId()
    {
        return this.userId;
    }
    setUserId(userId)
    {
        this.userId = userId;
    }
    getUserData()
    {
        return  this.userData;
    }
    setUserData(userData)
    {
        this.userData = userData;
    }

}

module.exports = User;