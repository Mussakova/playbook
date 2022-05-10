// Ejemplo 3: Instanciar un objeto con atributos
class Student {
  // El constructor nos permite instanciar un objeto y asignarle atributos, this nos ayuda a realizar esto.
  constructor(name, age, subjects){
    this.name = name
    this.age = age
    this.subjects = subjects
	}
}

// Crear un objeto desde la clase Student (esto se le llama instanciación)
const carloStudent = new Student("Carlo", 12, ["NodeJs", "Python"])
console.log("Ejemplo 3: Instanciar un objeto con atributos")
console.log(carloStudent)

class amigos{
constructor(name, age, lugar){
    this.name = name
    this.age = age
    this.lugar = lugar
}
}
const Diana = new amigos('Diana', 22, 'Pátzcuaro')

console.log(Diana);