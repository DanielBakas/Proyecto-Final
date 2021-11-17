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
const axios = require("axios").default;


export default class LoginForm extends Component {
    getData() {
        const correo = document.getElementById('input-email').value
        const contrasena = document.getElementById('input-password').value

        const usuario = { email: correo, password: contrasena }
        axios.post("http://localhost:5000/api/usuarios/auth/check", usuario)
            .then(res => {
                if (res.data !== "") {
                    localStorage.setItem("usuario", JSON.stringify(res.data))
                    this.props.handler.refreshPage()
                } else
                    console.log("Error en la Autenticación")
            })
    }

    render() {
        return (
            <div justify="center" align="middle">
                <Card id="main-card" className="login">
                    <Space direction="vertical">
                        <img id="card-image" src={process.env.PUBLIC_URL + 'images/logo.png'} alt="logo" />
                        <Title level={3} align="center">Login</Title>
                        <Text id="email" type="secondary" align="baseline">Email</Text>
                        <Input id="input-email" size="large" prefix={<UserOutlined />} />
                        <Text id="password" type="secondary">Password</Text>
                        <Input.Password id="input-password" size="large" iconRender={visible => (visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />)} />
                        <Button onClick={() => this.getData()} type="primary" size="large" align="center" id="sign-in-button">
                            Sign In
                        </Button>
                    </Space>
                </Card>
            </div>
        );
    }
}
