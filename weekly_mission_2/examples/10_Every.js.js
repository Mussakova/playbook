// Ejemplo 10: uso de every nos ayuda a validar todos los elementos de una lista, si todos cumplen con la validación que indiques te regresa true, de lo contrario false
const names10 = ['Explorer 1', 'Explorer 2', 'Explorer 3', 'Explorer 4']
const areAllStr = names10.every((name) => typeof name === 'string') // every
console.log("Ejemplo 10: Son todos los nombres string: " + areAllStr)

const amigos = [
    {nombre: 'Diana', lugar: 'Pátzcuaro'},
    {nombre: 'Carlos', lugar: 'Pátzcuaro'},
    {nombre: 'Daniel', lugar: 'Pichátaro'},
    {nombre: 'José', lugar: 'Cucuchucho'},
    {nombre: 'Keyder', lugar: 'Morelia'},
    {nombre: 'Alexia', lugar: 'Morelia'},
    {nombre: 'Perla', lugar: 'San Pedro L.'},
    {nombre: 'Esmeralda', lugar: 'Tecario'},
    {nombre: 'Jonathan', lugar: 'San Juan de Viña'},
]

const allSamePlace = amigos.every((amigos)=>amigos.lugar === 'Morelia')

console.log(`¿Son todos mis amigos de Morelia?: ${allSamePlace}`);