/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Página de Inicio
Módulo | `HomePage.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

// Importar Componentes
import Page from './Page'
import { Button } from 'antd';
import { Link } from "react-router-dom"

export default function ProfilePage() {
    var usuario = JSON.parse(localStorage.getItem('usuario'))
    return (
        <Page id="ProfilePage" selectedKey={2}>
            <Button type="primary" size="large" align="Left" id="back-button">
                <Link to="/">Regresar</Link>
            </Button>
            <h1 align="center">{usuario.nombre}</h1>
            <p align="center">Correo: {usuario.email}</p>
        </Page>
    )
}