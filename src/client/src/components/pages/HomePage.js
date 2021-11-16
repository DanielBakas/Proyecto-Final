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
        const video = { id: "isaodfhpoisdhfp", nombre: "Hola", url: "https://i.ytimg.com/vi/CnJ57LkkriE/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD4ePxAQyMb3npuUZepXTLNZL4PGQ" }
        for (let i = 0; i < 23; i++) {
            listData.push({
                avatar: 'https://joeschmoe.io/api/v1/random',
                href: `/video/${video.id}`,
                url: `${video.url}`,
                title: `Curso ${i + 1}`,
                description: 'Ant Design, a design language for background applications, is refined by Ant UED Team.',
                content: 'We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.',
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
                        <List.Item key={item.title} extra={<img height={100} alt="logo" src={item.url} />}>
                            <List.Item.Meta avatar={<Avatar src={item.avatar} />} title={<Link to={item.href}>{item.title}</Link>} description={item.description} />
                            {item.content}
                        </List.Item>
                    )}
                />
            </Page>
        )
    }
}