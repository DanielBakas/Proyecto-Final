/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Página de Inicio de Sesión
Módulo | `LoginPage.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

// Importar Componentes
import LoginForm from '../componentes/LoginForm';
import { Component } from "react"

// Importar CSS
import '../css/LoginForm.css';

export default class LoginPage extends Component {
    render() {
        return <LoginForm handler={this.props.handler} />
    }
}
