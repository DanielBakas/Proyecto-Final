/*
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
Página de Not Found
Módulo | `NotFoundPage.js`

{TODO: Descripción}

Daniel Bakas Amuchastegui     A01657103
Santiago Hernández Guerrero   A01027543
Oscar Vargas Pérez            A01657110
Oscar Antonio Becerril López  A01332639

Noviembre 14, 2021
–––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
*/

// Importar Componentes
import LoginPage from './LoginPage'

// Importar CSS
import "../css/Page.css"

// Importar Componentes de Ant Design
import { Layout, Menu } from 'antd'
import { Component } from "react"
import { Link } from "react-router-dom"

const { Header, Content, Footer } = Layout

export default class Page extends Component {
    render() {
        var usuario = localStorage.getItem('usuario')
        if (usuario === null)
            return <LoginPage />
        else {
            usuario = JSON.parse(usuario)
            return (
                <div id={this.props.id} >
                    <Layout className="layout">
                        <Header>
                            <div className="logo" />
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${this.props.selectedKey}`]}>
                                <Menu.Item key={1}>
                                    <Link to="/">Inicio</Link>
                                </Menu.Item>
                                <Menu.Item key={2}>
                                    <Link to="/video">Video</Link>
                                </Menu.Item>
                                <Menu.Item key={3}><Link to="/perfil">{usuario.nombre}</Link></Menu.Item>
                            </Menu>
                        </Header>
                        <Content className="site-layout-content">
                            <div>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                    </Layout>
                </div>
            )
        }
    }
}