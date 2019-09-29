import React, { Component } from 'react'
import './videocontainer.css'
export default class VideoContainer extends Component {
    
    render() {
        console.log(this.props)
        return (
            <div style={{cursor:'pointer',width:'500px',height:'300px',filter:'invert(1)',background:this.props.background,position:'relative', ...this.props.style}}> 
            <span className="video-title">{this.props.title}</span>
                <div style={{width:'50px',height:'50px',borderRadius:'50%',background:'#000',position:'absolute',left:'48%',top:'53%'}}>
                    <img src="./images/play.svg" alt="play" style={{position:'absolute',top:'27%',left:'31%'}}></img>
                </div>
            </div>
        )
    }
}
