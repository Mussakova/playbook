// Ejemplo 6: Getters para acceder a los atributos del objeto

class Ajolonauta {
  constructor(name, age, stack){
   this.name = name
   this.age = age
   this.stack = stack
   this.exercises_completed = 0
   this.exercises_todo = 99
  }

  // Podemos acceder a los atributos de esta clase
  get getExercisesCompleted() {
		return this.exercises_completed
  }
}

console.log("Ejemplo 6: Getters para acceder a los atributos del objeto")
const woopa = new Ajolonauta("Woopa", 1, [])
console.log(woopa.getExercisesCompleted)

class amigo{
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
  get statusFnshp(){
    return this.status
  }
}
const Marlen = new amigo('Marlen', 22, 'Pátzcuaro')

console.log(Marlen.statusFnshp);


