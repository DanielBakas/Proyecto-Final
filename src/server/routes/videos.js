/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Rutas de Video
Módulo | `videos.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

// Importar Paquetes
const express = require('express')

// Importar Módulos
const { Video } = require('../models/models')

const router = express.Router()

const Objeto = Video

router.get('/', (req, res) => {
    Objeto.find()
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

router.post('/', (req, res) => {
    const objeto = Objeto(req.body)
    objeto.save()
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

router.delete('/:id', (req, res) => {
    const { id } = req.params
    Objeto.deleteOne({ _id: id })
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

router.get('/:id', (req, res) => {
    const { id } = req.params
    Objeto.findById(id)
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

router.put('/:id', (req, res) => {
    const { id } = req.params
    const { nombre, comentario, url } = req.body
    const nuevosDatos = { $set: { nombre, comentario, url } }
    Objeto.updateOne({ _id: id }, nuevosDatos)
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

const videos = router

module.exports = videos