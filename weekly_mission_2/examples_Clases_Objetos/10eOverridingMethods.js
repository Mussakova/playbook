// Ejemplo 10: Overrinding methods

class Explorer{
    constructor(name, username, mission){
        this.name = name
        this.username = username
        this.mission = mission
    }

    getNameAndUsername(){
        return `Explorer ${this. name}, username: ${this.username}`
    }
}

class Viajero extends Explorer {
    constructor(name, username, mission, cycle){
        super(name, username, mission) // SUPER nos ayudará a llamar el constructor padre
        this.cycle = cycle // Agregamos este atributo de la clase Viajero, es exclusiva de esta clase y no de la clase padre
    }

    getGeneralInfo(){

        let nameAndUsername = this.getNameAndUsername() // llamamos el método de la clase padre
        
        return `${nameAndUsername}, Ciclo ${this.cycle}` // nameAndUsername  es una variable de esta función, no necesitas usar this para referenciarla.
    }
}

const viajero1 = new Viajero("Carlo", "LaunchX", "Node JS", "Abril 2022")

console.log("Ejemplo 10: Overrinding methods")

console.log(viajero1)

console.log(viajero1.getNameAndUsername()) // Método de la clase padre
console.log(viajero1.getGeneralInfo()) // Método de la clase hija



// Mi ejemplo
class amiga{
    constructor(name, age, place){
        this.name = name
        this.age = age
        this.place = place
        this.status = 'Amiga ✨✨✨'
        this.date = new Date()
    }
    getInfo(){
        // Aquí podría ir una descripción sobre lo qué hace esta clase o una premisa general a todos los objetos que serán llamados.
        return `${this.name} es mi ${this.status}, tiene ${this.age} años y vive en ${this.place}, la ví en esta fecha "${this.date}", en una playa de Cancún`
    }
    get getStatusFshp(){
    return this.status
    }
    set setStatusFshp(p_modificable){
        this.status = p_modificable
    }
}

class amigaSince extends amiga{
    constructor(name, age, place, añoNKConocimos){
        super(name, age, place)
        this.añoNKConocimos = añoNKConocimos
    }

    getGeneralnfoAmigas(){
        let amigasInfo = this.getInfo()
        return `${amigasInfo} y nos conocimos en el año ${this.añoNKConocimos}`
    }
}
const Marlen = new amiga('Marlen', 22, 'Pátzcuaro')
const PerlaSince = new amigaSince('Perla', 22, 'Toluca', 2008)
const MarlenSince = new amigaSince('Marlen', 22, 'Pátzcuaro', 2014)

console.log(Marlen);
console.log(MarlenSince);
console.log(MarlenSince.getGeneralnfoAmigas());
console.log(PerlaSince);
console.log(PerlaSince.getGeneralnfoAmigas());

