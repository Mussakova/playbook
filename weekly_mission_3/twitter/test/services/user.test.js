const userService = require('../../app/services/userService')
describe ("Tests for UserService ", () => {
    test("1. Create a new user using the UserService ", () =>{
        const user = userService.create(1, "Hirepan", "Mussakova")
        expect (user._username).toBe("Hirepan")
        expect (user._name).toBe("Mussakova")
        expect (user._id).toBe(1)
        expect (user._bio).not.toBeUndefined()
    }),
    test('2. Testing unitario para métodos estáticos Get', ()=>{
    const usuario = userService.create(1, "Hirepan", "Mussakova", "Sin Bio")
    const userInfoList = userService.getInfo(usuario)
        expect (userInfoList[0]).toBe(1)
        expect (userInfoList[1]).toBe("Hirepan")
        expect (userInfoList[2]).toBe("Mussakova")
        expect (userInfoList[3]).toBe("Sin bio")
    }),
    test('3.Update username con Set', ()=>{
            const user = userService.create(1, 'Hirepan', 'Mussakova')
            userService.updateUserUsername(user, 'Alyrezza')
            expect(user._username).toBe('Alyrezza')
        })
    test('4. Dada una lista de usuarios, devuelve una lista con todos los usernames', ()=>{
            const user1 = userService.create("Hirepan", "Mussakova1")
            const user2 = userService.create("Hirepan", "Mussakova2")
            const user3 = userService.create("Hirepan", "Mussakova3")
            const usernames = userService.getAllUsernames([user1, user2, user3])
            expect(usernames[0]).toBe('Mussakova1')
            expect(usernames[1]).toBe('Mussakova2')
            expect(usernames[2]).toBe('Mussakova3')
        })
})