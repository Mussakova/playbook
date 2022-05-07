class Pokemon{
    // 'constructor' construye un objeto con propiedades que pueden ser usadas dentro de la misma clase
    constructor(name){
    this.name = name
    }
    sayHello(){
    console.log(`Hola soy un ${this.name}`)
    }
    // Se establece un parámetro con el propósito de llamarlo después en la consola
    sayMessage(message){
        console.log(`${message}`)
    }
}
module.exports = Pokemon