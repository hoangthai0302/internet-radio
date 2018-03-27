import React from 'react'

import { connect } from 'react-redux'


class Player extends React.Component {

    componentWillReceiveProps(newProps){
        this.audio.src = newProps.streamUrl;
        this.audio.load();
        this.audio.play();
    }

    render() {
       let { playing, streamUrl } = this.props;
        return (
            <audio ref={(el) => { this.audio = el; }} 
                controls>
                <source src={streamUrl} type="audio/mpeg"/>
            </audio>
        )
      }

}

const mapStateToProps = (state) => ({
    playing: state.player.playing,
    streamUrl: state.player.streamUrl
})

export default connect(
    mapStateToProps,
    null
)(Player)
  
  
  