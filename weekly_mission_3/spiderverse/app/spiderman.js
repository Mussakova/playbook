class Spiderman{
constructor(name, age, actor, movies, studio){
    this._name = name
    this._age = age
    this._actor = actor
    this._movies = movies
    this._studio = studio
    }
    getInfo(){
        return "Hey, I'm Tom Holland from Marvel studio"
    }
}
module.exports = Spiderman