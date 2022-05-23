const User = require('../models/user')
function validation (i) {
    let x = Object.values(i)
    if(typeof x[0] == 'number' && typeof x[1] == 'string' && typeof x[2] == 'string'){
        return true
        // return x
    
}}
function creating(i){
    const x = Object.values(i)
    return new User(x[0], x[1], x[2])
}


class userView {

    static createUser(entry){
        if(entry === null) {
            // console.error('Error: entry null')
            return {error: 'payload no existe'}
            
        } else if(validation(entry)){
        // } else if(true){
        // let x = Object.values({id:22, username: 'Mussakova', name: 'Hirepan'})
        // return y = userService.create(x) ESTO SE DEBE HACER EN UNA LÓGICA {} DISTINTA
        return creating(entry)
        } 
        else{
            return {error: 'Los parámetros ingresados necesitan tener un valor válido'}
        }
        // const x = userService.create(22, 'Mussakova', 'Hirepan')
        // return x


}}

// const userService = require('../services/userService')
// const payload = {id:22,username: 'Mussakova', name: 'Hirepan'}
// console.log(creating(payload));

// const result = userService.create(payload)
// console.log(result);

// let x = Object.values(payload)
// console.log(x);

// s = Object.entries(payload)
// console.log(s);

// console.log(userService.create(payload));
// let u = typeof entry
// console.log(u);

module.exports = userView