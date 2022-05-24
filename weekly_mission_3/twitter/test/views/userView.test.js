const userService = require('../../app/services/userService')
const userView = require('./../../app/views/userView')

describe('Testing de UserView para agregar vistas',()=>{
    test("1. Return an error object when try to create a new user with an null payload", ()=>{
        const payload = null
        const result = userView.createUser(payload)
        //jestjs.io/docs/using-matchers#string (.toMatch use /STRING/)
        expect(result.error).toMatch(/payload no existe/)
    }),
    test('2. Return an error when try to create a new user with a payload with invalid properties', ()=>{
            const payload = {username: null, name: 'Hirepan', id: 'id'}
            const result = userView.createUser(payload)
            expect(result.error).toMatch(/necesitan tener un valor válido/)
        }),
    test('3. Return an error object when try to create a new user with a payload with missing properties', ()=>{
        const payload = {id:'sfd', username: 789, name: 89}
            const result = userView.createUser(payload)
            expect(result.error).toMatch(/necesitan tener un valor válido/)
        }),
    test('4. Create a user by a given valid payload', ()=>{
        const payload = {id:22, username: 'Mussakova', name: 'Hirepan'}
        const result = userView.createUser(payload)
        
        expect(result._name).toBe('Hirepan')
        expect(result._username).toBe('Mussakova')
        expect(result._id).toBe(22)
        })

})