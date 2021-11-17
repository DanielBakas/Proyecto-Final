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
import { Avatar, List } from 'antd';
import React, { Component } from 'react';
import Page from './Page'
import { Link } from 'react-router-dom';

// Importar Paquetes
import axios from 'axios';

export default class HomePage extends Component {
    state = {
        videos: []
    }

    componentDidMount() {
        let reqOptions = {
            url: "http://localhost:5000/api/videos",
            method: "GET",
        }

        axios.request(reqOptions).then(res => {
            console.log(res.data)
            const videos = res.data
            this.setState({ videos })
        })
    }

    render() {
        const videos = this.state.videos
        const data = []
        for (let i = 0; i < videos.length; i++) {
            data.push({
                _id: videos[i]._id,
                avatar: `${process.env.PUBLIC_URL + 'images/logo.png'}`,
                href: `/video/${videos[i]._id}`,
                titulo: videos[i].titulo,
                subtitulo: videos[i].subtitulo,
                descripcion: videos[i].descripcion,
                thumbnail: videos[i].thumbnail,
                url: videos[i].url
            });
        }
        return (
            <Page id="HomePage" selectedKey={1}>
                <h1>Cursos</h1>
                <List dataSource={data} itemLayout="vertical" size="large"
                    pagination={{
                        onChange: page => { console.log(page) },
                        pageSize: 10,
                    }}
                    renderItem={item => (
                        <List.Item key={item._id} extra={<img height={100} alt="logo" src={item.thumbnail} />}>
                            <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<Link to={item.href}>{item.titulo}</Link>} description={item.subtitulo} />
                            {item.descripcion}
                        </List.Item>
                    )}
                />
            </Page>
        )
    }
}