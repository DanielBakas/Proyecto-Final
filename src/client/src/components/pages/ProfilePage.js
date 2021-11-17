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

export default function ProfilePage() {
    var usuario = JSON.parse(localStorage.getItem('usuario'))
    return (
        <Page id="ProfilePage" selectedKey={3}>
            <h1 align="center">Nombre del usuario: {usuario.nombre}</h1>
            <h2 align="center">Correo del usuario: {usuario.email}</h2>
        </Page>
    )
}