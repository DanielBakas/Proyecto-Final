/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Cliente Frontend
Módulo | `index.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

// Importar CSS
import 'antd/dist/antd.css';

// Importar Componentes
import App from './App'

// Importar Paquetes
import React from 'react'
import ReactDOM from 'react-dom'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)