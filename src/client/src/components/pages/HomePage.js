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

// Importar Paquetes
import axios from 'axios';

export default class HomePage extends Component {
    state = {
        videos: []
    }

    componentDidMount() {
        // TODO agarrar request de /api/videos

        let reqOptions = {
            url: "http://localhost:5000/api/videos",
            method: "GET",
        }

        axios.request(reqOptions).then(res => {
            console.log(res.data)
            const videos = res.data
            this.setState({ videos })
        })


        // return [
        //     {
        //         _id: "619359341b2f352797554cf1",
        //         titulo: "How to Get Started Learning Embedded Systems",
        //         subtitulo: "134,712 vistas • 30 nov. 2019",
        //         descripcion: "How to Get Started Learning Embedded Systems // I've been meaning to start making more embedded systems videos — that is, computer science videos oriented to things you don't normally think of as computers (toys, robots, machines, cars, appliances). I hope this video helps you take the first step.",
        //         thumbnail: "https://i.ytimg.com/an_webp/aC37UE7edP0/mqdefault_6s.webp?du=3000&sqp=CLC7zYwG&rs=AOn4CLBIItGwiHAroo38HxVjyViJY0Rggg",
        //         url: "https://www.youtube.com/watch?v=aC37UE7edP0&t=1s"
        //     }
        // ] // Dado por una llamada de axios de getAll a /api/videos
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
        const IconText = ({ icon, text }) => (
            <Space>
                {React.createElement(icon)}
                {text}
            </Space>
        );
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