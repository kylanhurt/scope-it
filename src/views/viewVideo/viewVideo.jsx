import React, { Component, Fragment } from "react"
import { Row, Col, Card, CardHeader, CardBody, Button, FormGroup, Label, Input } from "reactstrap"
import DropzoneComponent from "react-dropzone-component"
import InputMask from "react-input-mask"
import ReactNumeric, { predefinedOptions } from "react-numeric"
import MainCard from "../../components/mainCard/mainCard"
import WebSocketChat from '../../components/WebSocketChat/WebSocketChat'
import { useParams } from 'react-router-dom'
import EOSIOClient from '../../eosioClient'

const eosClient = new EOSIOClient('haytemrtg4ge') // hardcode app name

class ViewVideo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      description: '',
      source: ''
    }
  }

  componentWillMount = async () => {
    const { rand } = this.props.match.params
    const videoResponse = await fetch(`http://localhost:3333/videos/${rand}`)
    const videoData = await videoResponse.json()
    this.setState({
      ...videoData[0]
    })
  }

  sendSuperChat = (data) => {
    eosClient.transaction(data)
  }

  render() {
    const { source, title, description } = this.state
    const videoPath = `http://localhost:3333/videos/processed/${source}`
    if (!source) return (<div></div>)
    return (
      <Row id='view-video'>
        <Col sm={12} lg={8} id='video-wrapper'>
          <Card>
            <CardBody>
              <video
                id="primary-video"
                className="video-js"
                controls
                preload="auto"
                width="100%"
                poster="MY_VIDEO_POSTER.jpg"
                data-setup="{}"
                autoPlay={true}
                muted={true}
              >
                <source src={`${videoPath}`} type="video/mp4" />
                <source src="MY_VIDEO.webm" type="video/webm" />
                <p className="vjs-no-js">
                  To view this video please enable JavaScript, and consider upgrading to a
                  web browser that
                  <a href="https://videojs.com/html5-video-support/" target="_blank"
                    >supports HTML5 video</a>
                </p>
                </video>
                <div id='primary-video-info'>
                  <p>{description}</p>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col sm={12} lg={4}>
            <Card>
              <CardBody style={{ height: 480, display: 'flex', flexDirection: 'row' }}>
                <WebSocketChat sendSuperChat={this.sendSuperChat} />
              </CardBody>
            </Card>
          </Col>
        </Row>
    )
  }
}

export default ViewVideo
