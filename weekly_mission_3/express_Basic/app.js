// Usando objeto express
const express = require('express')
// App de express
const app = express()
// Puerto en el que vamos a ver nuestra app: localhost:3000
const port = 3000
// Con esto inicializamos esta app
app.listen(port, ()=>{
    console.log(`Example app listening on port ${port}`);
})
// path inicial, responderá a la url localhost:3000
app.get('/', (request, response)=>{
    response.send('Hello World since NodeJs')
})
// Regresando un objeto
// localhost:300/explorersInNode
app.get('/explorersInNode', (request, response)=>{
    const explorer = {name: "Mussakova", msg:"HOLA MUNDO. Aquí vamos"}
    response.send(explorer)
})

// Query Params: Recibir parámetros por la url
// localhost:3000/:UrlEntries
// request.params = {"linkRequest": "/UrlEntries"}
app.get('/:linkRequest', (request, response)=>{
    response.send(request.params)
})