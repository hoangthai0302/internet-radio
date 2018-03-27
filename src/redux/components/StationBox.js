import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

import StationItem from '../../react/StationItem/StationItem'
import BackButton from '../../react/BackButton/BackButton'
import { onStationItemClick } from '../core/stationActions'
import LocalStorageService from '../../utils/LocalStorageService';

class DirBox extends React.Component {

    componentDidMount(){
        
    }

    render() {
        let currentDir = this.props.match.params.dir;
        let currentGenre = this.props.match.params.genre;

        let onFavouriteClick = (station) => {
            LocalStorageService.toggleFavourite(station);
            this.setState({});
        }

        const listStations = this.props.stations.map((item) =>{
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



