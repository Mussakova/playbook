/* eslint-disable no-console */
// Un endpoint es la URL de una API que responde a una petición
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
// 1. GET Crea un endpoint que regrese una lista de explorers
app.get('/v1/explorers', (req, res)=>{
    console.log(`API Explorers GET ALL request ${new Date()}`);
const explorer1 = {id: 1, name: 'Hirepan 1'}
const explorer2 = {id: 2, name: 'Hirepan 2'}
const explorer3 = {id: 3, name: 'Hirepan 3'}
const explorer4 = {id: 4, name: 'Hirepan 4'}
const explorer5 = {id: 5, name: 'Hirepan 5'}
const explorer6 = {id: 6, name: 'Hirepan 6'}
const explorers = [explorer1, explorer2, explorer3, explorer4, explorer5, explorer6]
res.status(200).json(explorers)//.status Código de la respuesta y res.json responde en formato JSON
}
)
// 2. GET Creando un endpoint que regrese un explorer mediante un ID
app.get('/v1/explorers/:id', (req, res)=>{
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const explorer = {id: 'h', name: 'Hirepan Muss'}
    res.status(200).json(explorer)
})
// Nótese que cualquier entrada ':id' que se use, regresará la 'const explorer'


// 2.1 GET Un Endpoint que devuelva el parámetro 'ID' del Endpoint como 'value' de una 'key'
app.get('/v2/explorers/:idEndpoint', (req, res)=>{
    console.log(`API Explorers GET request ${new Date()}`)
    console.log(`Getting explorer with id ${req.params.id}`)
    const {idEndpoint} = req.params //de todos los parámetros del request, guarda el 'idEndpoint'
    const explorer = {id_explorer: 'h', name: 'Hirepan Muss'}
    res.status(200).json({explorer, idEndpoint})
})

// 2.2 Un Endpoint que reciba 2 parámetros dinámicos y los devuelva como valores de una llave

app.get('/v3/:idExplorer/v/:idCurso', (req, res) =>{
    console.log(`API Explorers GET 2 params ${new Date()}`)
    const explorer = {id_explorer: 'h', name: 'Hirepan Muss'}
    const {idExplorer, idCurso } = req.params;
    res.status(200).json({idExplorer, idCurso, explorer
    })
})

// 3. POST Creando un endpoint que se encargue de crear un explorer
app.post('/v1/explorers', (req, res)=>{
    console.log(`API Explorers POST request ${new Date()}`);
    const requestBody = req.body //parámetros de un cliente
    res.status(201).json({message: 'Created'})//Respuesta del Servidor
})

// 4. Crea un endpoint que se encargue de actualizar un explorer

app.put('/v1/explorers/:id', (req, res)=>{
    console.log(`API Explorers PUT Request ${new Date()}`);
    console.log(`Update explorer with id ${req.params.id}`);
    const requestBody = req.body //parámetros de un cliente
    res.status(200).json({message: "Updated"})//Respuesta del servidor
})

// 5. DELETE Crea un Endpoint para eliminar un explorer

app.delete('/v1/explorers/:id', (req, res)=>{
    console.log(`API Explorers DELETE Request ${new Date()}`);
    console.log(`Delete explorer with id ${req.params}`);
    const requestBody =req.body //Parámetros de un cliente
    res.status(200).json({message: 'Deleted'})//Esto es lo que responde el servidor
})
