// Ejemplo 1: Objeto Vacío
const objetoVacio = {}
console.log('Ejemplo 1: Objeto Vacío');
console.log(objetoVacio);

// Ejemplo 2: Crear un objeto con propiedades
const Casa = {
    Familia: 'Esquivel',
    Recamaras: 3,
    Baños: 6,
    Cochera: 1,
    Jardines: 3,
    Piscinas: 3,
}
console.log(`Ejemplo 2: Crear un Objeto con propiedades`);
console.log(Casa);

// Ejemplo 3: Objeto con diferentes propiedades
const Casa2 = {
    Familia: 'Alyressa',
    Ubicacion: 'Bosque de las Cascadas',
    Recamaras: 4,
    Tirolesas: 3,
    Mascotas: ['Perros', 'Gatos', 'Urones']
}
console.log(`Ejemplo 3: Objeto con diferentes propiedades`);
console.log(Casa2);
console.log(Casa2.Familia);
console.log(Casa2.Ubicacion);
console.log(Casa2['Mascotas']);

// Ejemplo 4: Objeto con métodos

const HouseDoor = {
    definicion: 'Puerta Inteligente de la casa',
    sayHelloo: function(){
        console.log(`Hola, la familia ${Casa2.Familia} y ${Casa.Familia} te Saludan. Bienvenido !!`);
    }
}
console.log(`Ejemplo 4: Objeto con métodos`);
HouseDoor.sayHelloo()

// Ejemplo 5: Objeto con métodos que reciban parámetros

const Hablando ={
    name: 'El anfitrión de este hogar',
    // La 'x' representa que existe un parámetro que va a ser suplido en un futuro por el parámetro que se dé como entrada entre los () del evento de llamada '(...)'
    Saludo: function(x){
    console.log(`${this.name} le da la Bienvenida ${x} !!`);
    },
}
console.log('Ejemplo 5: Objeto con métodos que reciben parámtros');
Hablando.Saludo('Aryssa')
