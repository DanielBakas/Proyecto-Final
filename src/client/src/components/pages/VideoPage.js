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
import { Space, Radio } from 'antd'
import { DislikeOutlined, LikeOutlined } from '@ant-design/icons';
import "../css/VideoPage.css";
import React, { Component } from 'react';


// Importar Paquetes
import axios from 'axios';

export default class VideoPage extends Component {

    state = {
        video:[]
    }

    componentDidMount(){
        let id =this.props.match.params.id 

        let reqOptions = {
            url: `http://localhost:5000/api/videos/${id}`,
            method: "GET",     
        }

        console.log(reqOptions.url)
           
        axios.request(reqOptions).then(res => {
            console.log(res.data)
            const video = res.data
            this.setState({video})
            console.log("state")
            console.log(this.state.video)
        })

    }

    render() {
        const video = this.state.video // var video = axios a /api/videos/:id con this.props.params.id
        //console.log(this.props.params.id)
        return (
            <Page id="VideoPage" selectedKey={2}>
                <Space id="video-container" direction="vertical" >
                    <div className="container">
                        <iframe className="responsive-iframe"
                            // width="80%" height="45%"
                            //src="https://www.youtube.com/embed/Q4MymPStabI"
                            //src="https://www.youtube.com/embed/aC37UE7edP0"
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