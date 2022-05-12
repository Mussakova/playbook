
// Ejemplo 7: Setters para modificar los atributos del objeto
class MissionCommander {
  constructor(name, mission){
	  this.name = name
	  this.mission = mission
	  this.students = 0
	  this.lives = 0
  }

  get getStudents(){
   return this.students
  }

  get getLives(){
   return this.lives
  }

  set setStudents(students){
    this.students = students
  }

  set setLives(lives){
    this.lives = lives
  }
}

console.log("Ejemplo 7: Setters para modificar los atributos del objeto")
const missionCommanderNode = new MissionCommander("Carlo", "NodeJS")

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default

// actualizamos los atributos por medio de los setters
missionCommanderNode.setStudents = 100
missionCommanderNode.setLives = 3

console.log(missionCommanderNode.getStudents) // 0 por default
console.log(missionCommanderNode.getLives)// 0 por default

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
let Marlen = new amiga('Marlen', 22, 'Pátzcuaro')
console.log(Marlen)

amiga.setStatusFshp = 'Una persona sin duda, significativa para mí'
console.log(Marlen);
console.log(amiga.setStatusFshp);
console.log(Marlen);
