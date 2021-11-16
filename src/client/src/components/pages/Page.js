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

// Importar CSS
import "./Page.css"

// Importar Componentes de Ant Design
import { Layout, Menu } from 'antd';
import { Component } from "react";
import { Link } from "react-router-dom";

const { Header, Content, Footer } = Layout

export default class Page extends Component {
    render() {
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
                                <Link to="/videos">Videos</Link>
                            </Menu.Item>
                            <Menu.Item key={3}>
                                <Link to="/login">Iniciar Sesión</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '50px' }}>
                        <div className="site-layout-content">
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        )
    }
}