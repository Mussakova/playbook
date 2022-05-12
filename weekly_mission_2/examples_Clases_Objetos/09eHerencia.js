/*
HERENCIA: Nos permite relacionar clases entre sí y rehusar sus componentes
*/

// Ejemplo  9: Herencia entre dos clases
class Developer {
  constructor(name, mainLang, stack){
    this.name =  name
    this.mainLang = mainLang
    this.stack = stack
  }

  get getName() {
		return this.name
	}
}

console.log("Ejemplo  9: Herencia entre dos clases")
const carloDev = new Developer("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloDev)

// Se usa la palabra extends para indicar que heredarás las propiedades de la clase Padre (Developer) en la clase definida.
// Podemos definir una clase vacía y rehusar todos los componentes de la clase padre
class LaunchXStudent extends Developer{
}

const carloLaunchXDev = new LaunchXStudent("Carlo", "js", ["elixir", "groovy", "lisp"])
console.log(carloLaunchXDev)
console.log(carloLaunchXDev.getName) // getter de la clase padre rehusada en la clase hija

// Mi ejemplo

class amiga{
    constructor(name, age, place){
        this.name = name
        this.age = age
        this.place = place
        this.status = 'Amiga ❤'
        this.date = new Date()
    }
    getInfo(){
        // Aquí podría ir una descripción sobre lo qué hace esta clase o una premisa general a todos los objetos que serán llamados.
        return `${this.name} es mi ${this.status}, tiene ${this.age} años y vive en ${this.place} y la ví en esta fecha "${this.date}", en una playa de Cancún`
    }
    get getStatusFshp(){
    return this.status
    }
    set setStatusFshp(p_modificable){
        this.status = p_modificable
    }
}
const Marlen = new amiga('Marlen', 22, 'Pátzcuaro')

class peques extends amiga{}

const infantes = new peques('Santiago', 3, 'Pátzcuaro')

console.log(Marlen)
console.log(infantes);

