class User{
    constructor(id, username, name, bio, dateCreated, lastUpdated){
    this._id = id 
    this._username = username 
    this._name = name
    this._bio = bio
    this._dateCreated = new Date()
    this._lastUpdated = new Date() 
    }
    
    get getUsername(){
        return this._username
    }
    get getBio(){
        return this._bio
    }
    get getDateCreated(){
        return this._dateCreated
    }
    get getLastUpdated(){
        return this._lastUpdated
    }
    set setUsername(username){
        this._username = username
    }
    set setBio(nuevaBio){
        this._bio = nuevaBio
    }

    }

module.exports = User