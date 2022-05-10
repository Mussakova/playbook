// Ejemplo 5: Atributos con valores por default
class PullRequest {
  constructor(repo, title, lines_changed){
    this.repo = repo
    this.title = title
    this.lines_changed = lines_changed
    this.status = "OPEN"
    this.dateCreated = new Date() // esto guardará la fecha actual en que se instancia el objeto
	}

  getInfo(){
    return `This PR is in the repo: ${this.repo} (status: ${this.status}) and was created on ${this.dateCreated}`
  }
}

console.log("Ejemplo 5: Atributos con valores por default")
const myPR1 = new PullRequest("LaunchX", "Mi Primer PR", 100)
console.log(myPR1.getInfo())

// Puedes instanciar n cantidad de objetos de la misma clase
const myPR2 = new PullRequest("LaunchX", "Mi segundo PR", 99)
console.log(myPR2.getInfo())


class amigo{
    constructor(name, age, place){
        this.name = name
        this.age = age
        this.place = place
        this.status = 'amix'
        this.date = new Date()
    }
    getInfo(){
        // Aquí podría ir una descripción sobre lo qué hace esta clase o una premisa general a todos los objetos que serán llamados.
        return `${this.name} es mi ${this.status}, tiene ${this.age} años y vive en ${this.place}y lo ví en esta fecha "${this.date}", en una playa de Cancún`
    }
}

const Daniel = new amigo('Daniel', 23, 'Morelia')

console.log(amigo);
console.log(Daniel);
console.log(Daniel.getInfo());
