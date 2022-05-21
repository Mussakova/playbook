const Spiderman = require('../app/spiderman')
describe("Test Suite Dummy Description", () => {
    test('Case 1 Dummy', () => {
      const resultOfSomething = 1 + 17
      expect(resultOfSomething).toBe(18);
    });
  })

describe ("Unit Tests for Spiderman class", ()=>{
    test('1) Create an spiderman object', () =>{
// Aqui escribimos el código que queremos usar tal cuál
// Quiero poder instanciar un objeto Spiderman con esta información
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 31, "Sony")
// Validamos que este código funcione de la forma esperada
    expect(andrewGarfield._name).toBe("Spiderman Sony");
    expect(andrewGarfield._age).toBe(31)
    expect(andrewGarfield._actor).toBe("Andrew Garfield")
    expect(andrewGarfield._movies).toBe(31)
    expect(andrewGarfield._studio).toBe("Sony")

    })
})

describe("Unit Test for Tom Holland Spiderman", ()=>{
    test('1.Crear Spiderman de Holland', ()=>{
        const tomHolland = new Spiderman('Spiderman Marvel', 25, 'Tom Holland', 5, 'Marvel')
        expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio")
    })
}

)
// const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony")
// console.log(andrewGarfield);