// Ejemplo 7: Uso de filter para filtrar una lista de elementos
const countries7 = ['Finland', 'Denmark', 'Sweden', 'Norway', 'Iceland']
const countriesContainingLand = countries7.filter((country) => // esta es una función
    country.includes('land') // indicación para solo filtrar elementos que incluyan "land"
)
console.log("Ejemplo 7: Uso de filter para filtrar una lista de elementos")
console.log(countriesContainingLand)

const countriesEndsByia = countries7.filter((country) => country.endsWith('ia'))

console.log("Ejemplo 7: Paises que terminan en ia")
console.log(countriesEndsByia)

// Usando .filter y .endsWith
const colores = ["rojo", "azul", "verde", "amarillo", "negro", "blanco", "anaranjado", "morado", " violeta",]
const coloresTerminanEnO = colores.filter((i)=> i.endsWith('o'))
// El .filter() debe contener una función que establezca los parámteros que se deseen filtrar
console.log('Colores que terminan en O');
console.log(coloresTerminanEnO);

const colorWithNorR = colores.filter((i)=>i.includes('n'), ((i)=>i.includes('r')))
console.log('Colores que incluyen en N o R en su nombre');
console.log(colorWithNorR);