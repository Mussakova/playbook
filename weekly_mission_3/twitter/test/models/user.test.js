// Para cada requerimento de código es recomendable siempre agregar el archivo de prueba y el original en sus respectivos directorios

const User = require('../../app/models/user')

describe('Large Description. Unit test for User class',()=>{
    test('Short n Specific Description. 1. Create an User object', ()=>{
        const user = new User(1, 'Hirepan', 'Mussakova', 'Bio e Info')
        expect(user._id).toBe(1)
        expect(user._username).toBe('Hirepan')
        expect(user._name).toBe('Mussakova')
        expect(user._bio).toBe('Bio e Info')
        expect(user._dateCreated).not.toBeUndefined()
        expect(user._lastUpdated).not.toBeUndefined()
// Para que pase la prueba de .not.tobeUndefined, la propiedad de la clase importada "User" debe contener algún valor, para que regrese un valor y no 'undefined'

    })
test('Test de getters', ()=>{
        const user = new User(1, 'Hirepan', 'Mussakova', 'Bio e Info')
        expect(user.getUsername).toBe('Hirepan')
        expect(user.getBio).toBe('Bio e Info')
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    }
    )
    test('Test de setters', ()=>{
        const user = new User(1, 'Hirepan', 'Mussakova', 'Bio e Info')
        user.setUsername = 'Alyra'
        expect(user._username).toBe('Alyra')
        user.setBio = 'Nueva Bio'
        expect(user._bio).toBe('Nueva Bio')
    })
})