import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

import StationItemContainer from './StationItemContainer'
import BackButton from '../../react/BackButton/BackButton'
import { onStationItemClick } from '../core/stationActions'
import LocalStorageService from '../../utils/LocalStorageService'

class Favourite extends React.Component {

    componentDidMount(){
        
    }

    render() {
        const favouriteStations = LocalStorageService.getFavouriteStations();

        const listStations = favouriteStations.map((item) =>{
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
                    FAVORITE
                </h3>
                <div className="list-group-container">
                    { listStations }
                </div>
            </div>
        )
       
        
    }
}




export default withRouter(connect(
    null,
    { onStationItemClick }
)(Favourite))



