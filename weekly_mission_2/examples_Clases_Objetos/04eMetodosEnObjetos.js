// Ejemplo 4: Métodos en los objetos
class Repository {
  constructor(name, author, language, stars){
   this.name = name
   this.author = author
   this.language = language
   this.stars = stars
  }

  getInfo(){ // es una función que ejecutará cualquier objeto instanciado de esta clase
    return `Repository ${this.name} has ${this.stars} stars`
  }
}

console.log("Ejemplo 4: Métodos en los objetos")
const myRepo = new Repository("LaunchX", "carlogilmar", "js", 100)
console.log(myRepo.getInfo())

class amigo{
    constructor(name, age, place){
        this.name = name
        this.age = age
        this.place = place
    }
    getInfo(){
        // Aquí podría ir una descripción sobre lo qué hace esta clase o una premisa general a todos los objetos que serán llamados.
        return `${this.name} es mi amigo, tiene ${this.age} años y vive en ${this.place}`
    }
}

const Daniel = new amigo('Daniel', 23, 'Morelia')

console.log(amigo);
console.log(Daniel);
console.log(Daniel.getInfo());