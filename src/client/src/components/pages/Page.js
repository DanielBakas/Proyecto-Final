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
import { Button, Image, Layout, Menu } from 'antd'
import { Component } from "react"
import { Link } from "react-router-dom"

const { Header, Content, Footer } = Layout

export default class Page extends Component {
    refreshPage() { setTimeout(() => { window.location.reload(false) }, 100) }

    render() {
        var usuario = localStorage.getItem('usuario')
        if (usuario === null)
            return <LoginPage handler={this} />
        else {
            usuario = JSON.parse(usuario)
            return (
                <div id={this.props.id} >
                    <Layout className="layout">
                        <Header>
                            <Menu theme="dark" mode="horizontal" defaultSelectedKeys={[`${this.props.selectedKey}`]}>
                                <Menu.Item key={1}>
                                    <Link to="/">
                                        <Image preview={false} style={{ margin: "10px" }} height="30px" src='/images/logo.png'></Image>
                                    </Link>
                                </Menu.Item>
                                <Menu.Item key={2}><Link to="/perfil">{usuario.nombre}</Link></Menu.Item>
                                <Menu.Item key={3}>
                                    <Button ghost type="secondary" danger>
                                        <Link onClick={() => localStorage.removeItem("usuario")} to="/">Salir</Link>
                                    </Button>
                                </Menu.Item>
                            </Menu>
                        </Header>
                        <Content className="site-layout-content">
                            <div>
                                {this.props.children}
                            </div>
                        </Content>
                        <Footer style={{ textAlign: 'center' }}>KPMG © 2021 | Desarrollado por Estudiantes del Tecnológico de Monterrey CCM</Footer>
                    </Layout>
                </div >
            )
        }
    }
}