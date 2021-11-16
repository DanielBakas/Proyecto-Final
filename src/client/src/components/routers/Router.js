/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Router
Módulo | `Router.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

// Importar Componentes
import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import NotFoundPage from "../pages/NotFoundPage"
import ProfilePage from "../pages/ProfilePage"
import VideoPage from "../pages/VideoPage"

// Importar Paquetes
import { Route, BrowserRouter as ReactRouter, Switch } from "react-router-dom"

export default function Router() {
    return (
        <div id="Router">
            <ReactRouter>
                <Switch>
                    <Route exact path='/' component={HomePage} />
                    <Route path='/login' component={LoginPage} />
                    <Route path='/perfil' component={ProfilePage} />
                    <Route path='/video' component={VideoPage} />
                    <Route path='*' component={NotFoundPage} status={404} />
                </Switch>
            </ReactRouter>
        </div>
    )
}