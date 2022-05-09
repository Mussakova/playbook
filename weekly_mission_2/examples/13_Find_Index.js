const names13 = ['Explorer 1', 'Explorer 2', 'Explorer 3']
const result = names13.findIndex((name) => name.length > 7)
console.log("Ejemplo 13: Primer elemento cuya extensión de la palabra sea mayor a 7 esta en la posición "+ result)

colores = ["rojo", "azul", "verde", "amarillo", "negro", "blanco", "anaranjado", "morado", " violeta",]
// Encuentra la posición del elemento
const extenso = colores.findIndex((name) => name.length > 7)
console.log(extenso);
console.log("Ejemplo 13: Primer elemento cuya extensión de la palabra sea mayor a 7 esta en la posición "+ extenso + ' y es el color ' + colores[extenso])