// Ejemplo 9: Uso del reduce
// .reduce recibe 4 parámetros
const numbers9 = [1, 2, 3, 4, 5] //Array
/* acc: acumulador
element: Elemento actual tomado del array
0: índice desde el que se parte para realizar las acumulaciones
*/
const result_of_reduce = numbers9.reduce((acc, element) => acc + element, 0)
console.log("Ejemplo 9: Uso de reduce para calcular la suma de los elementos de una lista")
console.log(result_of_reduce)

