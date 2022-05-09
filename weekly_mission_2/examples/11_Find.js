// Ejemplo 11: Uso de find para encontrar el primer elemento de una lista que cumpla con lo que indiques
const ages = [24, 22, 19, 25, 32, 35, 18]
const age = ages.find((age) => age < 20)
console.log("Ejemplo 11: Primera edad menor a 20 es: "+ age)

const amigos = [
    {nombre: 'Diana', lugar: 'Pátzcuaro'},
    {nombre: 'Carlos', lugar: 'Pátzcuaro'},
    {nombre: 'Daniel', lugar: 'Pichátaro'},
    {nombre: 'José', lugar: 'Cucuchucho'},
    {nombre: 'Keyder', lugar: 'Morelia'},
    {nombre: 'Alexia', lugar: 'Morelia'},
    {nombre: 'Perla', lugar: 'San Pedro L.'},
    {nombre: 'Esmeralda', lugar: 'Tecario'},
    {nombre: 'Jonathan', lugar: 'San Juan de Viña'}
]

const patz = amigos.find((amigos)=> amigos.lugar === 'Pátzcuaro')
console.log(`${patz.nombre} es la primera persona que aparece de mis amigos en Pátzcuaro`);
const more = amigos.find((amigos)=> amigos.lugar === 'Morelia')
console.log(`${more.nombre} es la primera persona que aparece de mis amigos en Morelia`);