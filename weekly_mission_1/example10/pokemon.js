class MyPokemon{
    constructor(name){
        this.name = name
        }
        sayHello(){
        console.log(`Hola soy un ${this.name}`)
        }
        sayMessage(message){
            console.log(`${message}`)
        }
}
export default MyPokemon