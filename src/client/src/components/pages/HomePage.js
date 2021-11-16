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
import { Avatar, List, Space } from 'antd';
import { MessageOutlined, LikeOutlined, StarOutlined } from '@ant-design/icons';
import React, { Component } from 'react';
import Page from './Page'
import { Link } from 'react-router-dom';

export default class HomePage extends Component {
    render() {
        const listData = [];
        const video = {
            _id: "619359341b2f352797554cf1",
            titulo: "Video",
            subtitulo: "día mes. año",
            descripcion: "Descripcion",
            thumbnail: "https://i.ytimg.com/vi/CnJ57LkkriE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4ePxAQyMb3npuUZepXTLNZL4PGQ",
            url: "https://www.youtube.com/watch?v=aC37UE7edP0"
        }
        for (let i = 0; i < 23; i++) {
            listData.push({
                id: `${video._id}`,
                avatar: `${process.env.PUBLIC_URL + 'images/logo.png'}`,
                href: `/video/${video._id}`,
                titulo: `${video.titulo}`,
                subtitulo: `${video.subtitulo}`,
                descripcion: `${video.descripcion}`,
                url: `${video.url}`
            });
        }
        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );
        return (
            <Page id="HomePage" selectedKey={1}>
                <h1>Cursos</h1>
                <List dataSource={listData} itemLayout="vertical" size="large"
                    pagination={{
                        onChange: page => { console.log(page) },
                        pageSize: 10,
                    }}
                    footer={<div><b>Footer</b> Section</div>}
                    renderItem={item => (
                        <List.Item key={item.id} extra={<img height={100} alt="logo" src={item.url} />}>
                            <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<Link to={item.href}>{item.titulo}</Link>} description={item.subtitulo} />
                            {item.descripcion}
                        </List.Item>
                    )}
                />
            </Page>
        )
    }
}