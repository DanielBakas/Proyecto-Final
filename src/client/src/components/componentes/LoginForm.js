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
import { Button, Card, Input, Space } from 'antd';
import { UserOutlined, EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import Title from 'antd/es/typography/Title';
import Text from 'antd/es/typography/Text';
import { Component } from 'react';

// Importar Paquetes
const axios = require('axios')

export default class LoginForm extends Component {
    async login() {
        try {
            var {user, password} = await axios.get("localhost:5000/api/usuarios:id")
        } catch (err) {

        }
        // Comparar email y password para encontrar si el usuario existe
        // Si el usuario existe se almacena en la sesión
    }

    render() {
        return (
            <div justify="center" align="middle">
                <Card id="main-card" className="login">
                    <Space direction="vertical">
                        <img id="card-image" src={process.env.PUBLIC_URL + 'images/logo.png'} alt="logo" />
                        <Title level={3} align="center">Login</Title>
                        <Text id="email" type="secondary" align="baseline">Email</Text>
                        <Input size="large" prefix={<UserOutlined />} />
                        <Text id="password" type="secondary">Password</Text>
                        <Input.Password size="large" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                        <Button onClick={this.login()} type="primary" size="large" align="center" id="sign-in-button">Sign In</Button>
                    </Space>
                </Card>
            </div>
        );
    }
}
