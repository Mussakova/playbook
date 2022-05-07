// Ejemplo 2: for Each para calcular la suma de todos los elementos de una lista
let sum = 0;
const numbers2 = [1, 2, 3, 4, 5];
numbers2.forEach(num => sum += num)
console.log("Ejemplo 2: Cálculo de la suma de los elementos de la lista")
console.log(sum)

let add = 0;
const parte3 = [6, 7, 8, 9, 10]
// Para cada iteración 'i' del array 'parte3', regresa el valor del iterable i incrementando en 1
parte3.forEach(i => add += i)
// Imprime la variable add después de ser incrementada por el .forEach
console.log(add);