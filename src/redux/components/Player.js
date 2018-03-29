import React from 'react'

import { connect } from 'react-redux'
import './player.css'

class Player extends React.Component {

    constructor(){
        super();
        this.togglePlay = this.togglePlay.bind(this);
    }

    componentWillReceiveProps(newProps){
        this.audio.src = newProps.station.streamUrl;
        this.audio.load();
        this.audio.play();
    }

    togglePlay(){
        if(this.audio.paused){
            this.audio.play();
            this.setState({});
        }else {
            this.audio.pause();
            this.setState({});
        }
    }

    render() {
       let { station } = this.props;
       let audioStyle = {
            display: 'none'
        };
        

        var imgStyle = {
            width: '160px',
            height:'160px',
            borderRadius: '80px',
            border: '4px solid #ccc'
        }
        let logo,streamUrl, name;

        if(station) {
            logo  = station.logo;
            streamUrl = station.streamUrl;
            name = station.name
        }

        let img;
        let isPlaying = false;

        if(streamUrl){
            isPlaying = !this.audio.paused;
        }

        if(logo){
            let cssClass = isPlaying ? 'rotating':'';
            img = <img className={cssClass} src = {logo} style= {imgStyle}/>
        }

        let playBtn;
        let playStatus = '';

        if(isPlaying){
            playStatus = "fa fa-pause"
        }else{
            playStatus = "fa fa-play"
        }

        let divStyle = {};

        if(!station) {
            divStyle = {
                display:'none'
            }
        }

        return (
            <div className="player-wrapper">
                {img}
                <div style= {divStyle}>
                    <p className="text-center">
                        <i className={playStatus} onClick = { ()=>{ this.togglePlay()}}></i>
                    </p>
                    <h3>{name}</h3>
                </div>

                <audio style={audioStyle} ref={(el) => { this.audio = el; }} 
                    controls>
                    <source src={streamUrl} type="audio/mpeg"/>
                </audio>
            </div>
        )
      }

}

const mapStateToProps = (state) => ({
    station: state.player.station,
    isPlaying : state.player.playing
})

export default connect(
    mapStateToProps,
    null
)(Player)
  
  
  