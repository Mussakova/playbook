const User = require('./../models/user')
class userService{  
    static create(id, username, name){
        return new User(id, username, name, "Sin bio")
    }

    static getInfo(usuario){
    // const array = [];
    // Object.values(usuario).forEach(key =>{
    //     array.push(key)
    // })
    // return array

    return Object.values(usuario)
    }
    // Se pone 'user' como parámetro para poder tener acceso a la const de nombre 'user' que guarda un objeto y sus propiedades, con el propósito de acceder a la propiedad '._username' y poder asignarle un nuevo valor con el segundo parámtro que se recibe.
    static updateUserUsername(user, newUsername){
        return user._username = newUsername
    }
    static getAllUsernames(user){
    const uNames = user.map(user => user._username)
    return uNames

    }
}
// console.log(userService.getAllUsernames());
module.exports = userService