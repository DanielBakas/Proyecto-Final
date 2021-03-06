/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Rutas de Usuarios
Módulo | `usuarios.js`

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
const { Lista } = require('../models/models')

const router = express.Router()

const Objeto = Lista

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
    const { nombre, videos } = req.body
    const nuevosDatos = { $set: { nombre, videos } }
    Objeto.updateOne({ _id: id }, nuevosDatos)
        .then(data => res.json(data))
        .catch(error => res.json(error))
})

const listas = router

module.exports = listas