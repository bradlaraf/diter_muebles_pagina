// const express = require('express')
// const jwt = require('jsonwebtoken')
// const config = require('./public/scripts/config')

// const app = express()
// app.use(express.json())
// app.use(express.urlencoded({extended:false}))
// app.use(express.static('public'))

// app.all('/user', (req, res, next) =>{ 
//     console.log('Paso por aqui')
// }) 


// app.get('/', (req, res) =>{
//     res.sendFile(__dirname + '/public/login.html')
// })

// app.get('/registro', (req, res) =>{
//     res.sendFile(__dirname + '/public/register.html')
// })


// app.listen(config.port, () =>{
//     console.log(`Servidor corriendo en el puerto ${config.port}, http://localhost:3000`)
// })


const express = require('express')
const jwt = require('jsonwebtoken')
const port = 3000

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(express.static('public'))


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
});

app.get('/products', (req, res) => {
    res.sendFile(__dirname + '/public/products.html')
});

app.get('/contact', (req, res) => {
    res.sendFile(__dirname + '/public/contact.html')
});

app.get('/about', (req, res) => {
    res.sendFile(__dirname + '/public/about.html')
});

app.get('/delivery', (req, res) => {
    res.sendFile(__dirname + '/public/delivery.html')
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`)
})
