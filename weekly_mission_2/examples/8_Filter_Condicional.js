// Ejemplo 8: Filtrar una lista por condicional
const scores = [
    { name: 'A', score: 95 },
    { name: 'L', score: 98 },
    { name: 'M', score: 80 },
    { name: 'E', score: 50 },
    { name: 'M', score: 85 },
    { name: 'J', score: 100 },
]
const scoresGreaterEighty = scores.filter((score) => score.score > 80)
console.log("Ejemplo 8: Filtrando elementos por score")
console.log(scoresGreaterEighty)

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
// Lo que va dentro de .filter() NO es un constructor, es la regla para decidir qué es lo que va a construir .filter().
const closeToMe = amigos.filter((amigos)=> amigos.lugar === 'Pátzcuaro')
console.log('Estos son los amigos que viven más cerca de mí');
console.log(closeToMe)