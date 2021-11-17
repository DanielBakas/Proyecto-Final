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
import Page from './Page'
import { Space, Radio, Button } from 'antd'
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import "../css/VideoPage.css";
import React, { Component } from 'react';


// Importar Paquetes
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class VideoPage extends Component {

    state = {
        video: []
    }

    componentDidMount() {
        let id = this.props.match.params.id

        let reqOptions = {
            url: `http://localhost:5000/api/videos/${id}`,
            method: "GET",
        }

        axios.request(reqOptions).then(res => {
            const video = res.data
            this.setState({ video })
        }).catch(error => { })

    }

    render() {
        const video = this.state.video // var video = axios a /api/videos/:id con this.props.params.id
        //console.log(this.props.params.id)
        return (
            <Page id="VideoPage" selectedKey={1}>
                <Button type="primary" size="large" align="Left" id="back-button">
                    <Link to="/">Regresar</Link>
                </Button>
                <Space id="video-container" direction="vertical" >
                    <div className="container">
                        <iframe className="responsive-iframe"
                            src={video.url}
                            title="YouTube video player" frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen />
                    </div>
                    <Space direction="horizontal" id='titlebar'>
                        <h1>{video.titulo}</h1>
                        <Radio.Group>
                            <Radio.Button value="large">
                                <LikeOutlined />
                            </Radio.Button>
                            <Radio.Button value="small">
                                <DislikeOutlined />
                            </Radio.Button>
                        </Radio.Group>
                    </Space>
                    <p>{video.descripcion}</p>
                </Space>
            </Page>
        )
    }

}