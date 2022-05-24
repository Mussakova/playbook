// Usando objeto express
const express = require('express')
// App de Express
const app = express()
app.use(express.json()) // Indicamos que usaremos JSON
// Puerto en que vamos a ver nuestra app: localhost:3000
const port = 3000

// Con esto inicializamos esta app
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
app.get('/v1/explorers', (req, res)=>{
    console.log(`API Explorers GET ALL request ${new Date()}`);
const explorer1 = {id: 1, name: 'Hirepan 1'}
const explorer2 = {id: 2, name: 'Hirepan 2'}
const explorer3 = {id: 3, name: 'Hirepan 3'}
const explorer4 = {id: 4, name: 'Hirepan 4'}
const explorer5 = {id: 5, name: 'Hirepan 5'}
const explorer6 = {id: 6, name: 'Hirepan 6'}
const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6]
res.status(200).json(explorers)    

}
)
// Creando un endpoint que se encargue de crear un explorer
app.post('./v1/explorers', (req, res)=>{
    console.log(`API Explorers POST request ${new Date()}`);
    const requestBody = req.body //parámetros de un cliente
    res.status(201).json({message: 'Created'})
})