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

// Middlewares
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