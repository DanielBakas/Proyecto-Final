/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Modelo de Usuario
Módulo | `usuario.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/


// Imports
const mongoose = require('mongoose')

const Usuario = mongoose.Schema({
    email: { type: String, required: true },
    nombre: { type: String, required: true },
    password: { type: String, required: true } // TODO: Implementar cifrado
})

module.exports = mongoose.model("Usuario", Usuario)