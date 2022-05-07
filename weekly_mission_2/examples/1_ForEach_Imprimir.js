// Ejemplo 1: for Each para imprimir elementos de una lista
const numbers = [1, 2, 3, 4, 5];
console.log("Ejemplo 1: Imprimiendo los elementos de una lista")
numbers.forEach(num => console.log(num))

const abc = ['a', 'b', 'c', 'd', 'e']
console.log("Ejemplo abc de ForEach");
// Para cada iteración 'x' del array abc, imprime el array abc
abc.forEach(function(x){
    console.log(abc);
})
// Para cada iteración 'y' del array abc, imprime el iterable 'y'
abc.forEach(y => console.log(y))
