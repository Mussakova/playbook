const explorers = [
    {
        name: "Explorer 1",
        exercises_completed: 10,
        rate: 99,
        city: "CDMX",
        stack: [ "js", "c#" ],
        missions: {
            onboarding: {
            isFinished: true,
            exercisesFinished: true
            },
            frontend: {
            isFinished: true,
            exercisesFinished: true
            }
        }
    },
    {
        name: "Explorer 2",
        exercises_completed: 9,
        city: "Veracruz",
        rate: 50,
        stack: ["js"],
        missions: {
            onboarding: {
            isFinished: false,
            exercisesFinished: false
            },
            frontend: {
            isFinished: false,
            exercisesFinished: false
            }
        }
    },
    {
        name: "Explorer 3",
        exercises_completed: 3,
        city: "Sonora",
        rate: 100,
        stack: [
        "elixir"
        ],
        missions: {
            onboarding: {
            isFinished: true,
            exercisesFinished: true
            },
            frontend: {
            isFinished: false,
            exercisesFinished: false
            }
        }
    }
]

// Imprime el nombre (propiedad name) de cada explorer en la lista, usa FOR EACH

const explorersNames = explorers.forEach(explorers => console.log(explorers.name))

// Imprime el stack de cada explorer, usa FOR EACH

const explorerSingleStacks = explorers.forEach(explorers => console.log(explorers.stack))

// Crea una nueva lista con las listas de stacks de cada explorer, usa MAP

const explorersStacksList = explorers.map(
    (explorers) => {return explorers.stack}
)
console.log(explorersStacksList);

// Obtén la lista de explorers que tengan en su stack "js", usa FILTER (para validar un elemento en un lista se usa el método includes)

const explorersJS = explorers.filter(explorers => explorers.stack.includes('js'))
console.log(explorersJS)

// Busca el primer explorer que sea de la CDMX, usa FIND
function explorersCDMX(i){
    return i.city.includes('CDMX')
}

console.log(explorers.find(explorersCDMX));

// Obtén la suma de todos los exercises_completed, usa REDUCE

const totalExcercise = explorers.map((explorers)=>{return explorers.exercises_completed})
console.log(totalExcercise);

const sumaTodosEjercicios = totalExcercise.reduce((a, b)=> a+b, 0)
console.log(sumaTodosEjercicios);

// Obtén la validación si al menos uno de los explorers tiene la propiedad exercisesFinished en frontend como true, usa SOME

const validacionSome = explorers.some(function name(i){return i.missions.frontend.exercisesFinished === false}
)
console.log(validacionSome);

// Obtén la validación si todos los explorers tienen la propiedad isFinished del onboarding como true. Usa EVERY.

const validacionEvery = explorers.every(function name(i){return i.missions.onboarding.isFinished === true}
)
console.log(validacionEvery);