class SimpleKeyValueDB
{
    constructor()
    {
        this.data = {};
    }
    
    setData(key, value)
    {
        this.data[key] = value;
    }
    getData(key)
    {
        return this.data[key];
    }
    deleteSpecData(key)
    {
        if(this.data.hasOwnProperty(key)) 
        {
          delete this.data[key];
          return true; // Successful op
        } 
        else
        {
          return false; // Key does not exist
        }
    }

    clearDB()
    {
        this.data = {};
    }
    
}
