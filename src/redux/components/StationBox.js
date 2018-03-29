import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

import BackButton from '../../react/BackButton/BackButton'
import { onStationItemClick } from '../core/stationActions'
import LocalStorageService from '../../utils/LocalStorageService';
import StationItemContainer from './StationItemContainer'

class DirBox extends React.Component {

    componentDidMount(){
        
    }

    render() {
        let currentDir = this.props.match.params.dir;
        let currentGenre = this.props.match.params.genre;

      
        const listStations = this.props.stations.map((item) =>{
            return (
                <StationItemContainer 
                    key = {v4()}
                    item = {item}
                />
            )
        })

        return (
            
            <div>
                <h3 className="flex-container">
                    <BackButton onClick={()=>{ this.props.history.push('/category/' +currentGenre )} }/>
                    {currentGenre} - {currentDir}
                </h3>
                <div className="list-group-container">
                    { listStations }
                </div>
            </div>
        )
       
        
    }
}

const mapStateToProps = (state, ownProps) => ({
    stations:state.stations,
    station:state.station
})


export default withRouter(connect(
    mapStateToProps,
    { onStationItemClick }
)(DirBox))



