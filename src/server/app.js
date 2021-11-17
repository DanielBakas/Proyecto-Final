/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Servidor Backend
Aplicación | `app.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

// Importar Paquetes
const bodyParser = require('body-parser')
const dotenv = require('dotenv')
const express = require('express')
const mongoose = require('mongoose')

// Importar Módulos
const { listas, usuarios, videos } = require("./routes/rutas")

// Configuración de dotenv
dotenv.config()

// Inicialización del Servidor de Express
const app = express()

// Declaración de Variable | `port`
const port = process.env.PORT || 5000

// Declaración de Variable | `uri`
const uri = process.env.MONGODB_URI

app.use(function (req, res, next) {
  /*var err = new Error('Not Found');
   err.status = 404;
   next(err);*/

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', '*');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization');

  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

  // Pass to next layer of middleware
  next();
});

// Middlewares
app.use(bodyParser.json())
app.use(express.json())
app.use('/api/listas', listas)
app.use('/api/usuarios', usuarios)
app.use('/api/videos', videos)

// Rutas
app.get('/', (req, res) => res.send("Backend Server"))

// Conexión con MongoDB Atlas
mongoose.connect(uri)
  .then(() => console.log("Connected to MongoDB Atlas Database"))
  .catch((error) => console.log("Error Connecting to MongoDB Atlas Database:", error))

// Comenzar a escuchar en el puerto determinado
app.listen(port, () => console.log(`Listening on port ${port}`))