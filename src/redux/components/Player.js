import React from 'react'

import { connect } from 'react-redux'

let Player = ({ playing, streamUrl }) => (
    <audio controls>
        <source src={streamUrl} type="audio/mp3"/>
    </audio>
)

const mapStateToProps = (state) => ({
  playing: state.player.playing,
  streamUrl: state.player.streamUrl
})

export default connect(
    mapStateToProps,
    null
  )(Player)
  
  
  