// Ejemplo 16: Ordenando una lista de objetos
const users = [
  { name: 'A', age: 150 },
  { name: 'B', age: 50 },
  { name: 'C', age: 100 },
  { name: 'D', age: 22 },
]

users.sort((a, b) => { // podemos invocar una función
  if (a.age < b.age) return -1
  if (a.age > b.age) return 1
  return 0
})

console.log("Ejemplo 16: Ordenando una lista de objetos por la edad")
console.log(users) // sorted ascending

const amigos = [
  {nombre: 'Diana', lugarKm: 15},
  {nombre: 'Carlos', lugarKm: 15},
  {nombre: 'Daniel', lugarKm: 46},
  {nombre: 'José', lugarKm: 30},
  {nombre: 'Keyder', lugarKm: 71},
  {nombre: 'Alexia', lugarKm: 71},
  {nombre: 'Perla', lugarKm: 327},
  {nombre: 'Esmeralda', lugarKm: 41},
  {nombre: 'Jonathan', lugarKm: 30}
]

const distanceCloserFriends= amigos.sort(
  ((a, b)=>{
      if (a.lugarKm < b.lugarKm) return -1
      if (a.lugarKm > b.lugarKm) return 1
      return 0
  })
)
console.log(distanceCloserFriends);

const x = distanceCloserFriends.forEach((i)=>console.log(`${i.nombre} se encuentra a ${i.lugarKm} Km de mí y después... `))