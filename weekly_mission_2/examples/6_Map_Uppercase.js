// Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas
const countries6 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesFirstThreeLetters = countries6.map((country) =>
  country.toUpperCase().slice(0, 3) // el método slice obtiene solo la longitud marcada del string
//   Contando después del primer numero hasta el segundo. 1-2-´3`. En este caso 3 caractéres
)
console.log("Ejemplo 6: Uso de map para convertir todos los nombres de una lista a mayúsculas")
console.log(countriesFirstThreeLetters)

const names = ['Alicia', 'Verónica', 'Arlet', 'Diana']
namesModified = names.map((i)=>i.toUpperCase())
console.log(namesModified);