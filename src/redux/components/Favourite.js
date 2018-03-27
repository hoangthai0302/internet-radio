import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

import StationItem from '../../react/StationItem/StationItem'
import BackButton from '../../react/BackButton/BackButton'
import { onStationItemClick } from '../core/stationActions'
import LocalStorageService from '../../utils/LocalStorageService'

class Favourite extends React.Component {

    componentDidMount(){
        
    }

    render() {
        const favouriteStations = LocalStorageService.getFavouriteStations();

        let onFavouriteClick = (station) => {
            LocalStorageService.toggleFavourite(station);
            this.setState({});
        }

        const listStations = favouriteStations.map((item) =>{
            let isFavourite = LocalStorageService.isFavourite(item.id);
            return (
                <StationItem 
                    key = {v4()}
                    name = {item.name}
                    logo = {item.logo || ''}
                    onClick = { ()=>{ this.props.onStationItemClick(item) } }
                    onFavouriteClick = { ()=> { onFavouriteClick(item) }}
                    active = { isFavourite }
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



