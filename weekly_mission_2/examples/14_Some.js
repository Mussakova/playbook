// Ejemplo 14: Uso de some, este método validará todos los elementos de la lista, y si alguno cumple con la validación indicada, regresará true, de lo contrario será false.

// lista de elementos
const bools = [true, true, false, true]
// Uso de Some para ver si al menos uno de los elementos es false
const areSomeTrue = bools.some((b) =>  b === false)
console.log("Ejemplo 14: Alguno de los elementos en el array es false: " + areSomeTrue) //true

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

const vivenEnMorelia = amigos.some((amigos)=> amigos.lugar === 'Morelia')

console.log(`¿Existe al menos un amigo o amiga que viva en Morelia ?:${vivenEnMorelia}`);