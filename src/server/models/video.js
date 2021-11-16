/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Modelo de Video
Módulo | `video.js`

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

const Video = mongoose.Schema({
    titulo: { type: String, required: true },
    subtitulo: { type: String, required: false },
    descripcion: { type: String, required: false },
    thumbnail: { type: String, required: true },
    url: { type: String, required: true }
})

module.exports = mongoose.model("Video", Video)