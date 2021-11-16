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


export default function VideoPage() {
    const video = {
        url: "https://www.youtube.com/watch?v=Q4MymPStabI",
        titulo: "Blind (Frankie Knuckles Remix)",
        descripcion: "Provided to YouTube by Parlophone UK"
    } // var video = axios a /api/videos/:id con this.props.params.id
    return (
        <Page id="VideoPage" selectedKey={2}>
            <Space id="video-container" direction="vertical">
                <iframe
                    width="960" height="615"
                    src="https://www.youtube.com/embed/Q4MymPStabI"
                    // src={video.url}
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen />
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