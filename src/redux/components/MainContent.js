import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'


import ListItem from '../../react/ListItem/ListItem'
import StationItem from '../../react/StationItem/StationItem'
import { ItemTypes, SidebarItems } from '../constants'

import { onGenreItemClick } from '../core/genreActions'
import { onStationItemClick } from '../core/stationActions'

class MainContent extends React.Component {

    render() {

        
      
        const listGenres = this.props.genres.map((item) =>{
                return (
                    <ListItem 
                    key = {v4()}
                    text = {item.name}
                        onClick = { ()=>{ this.props.onGenreItemClick(item) } }
                    />
                )
        })

        const listStations = this.props.stations.map((item) =>{
            return (
                <StationItem 
                    key = {v4()}
                    name = {item.name}
                    logo = {item.logo || ''}
                    onClick = { ()=>{ this.props.onStationItemClick(item) } }
                />
            )
        })

        let sidebar_item = this.props.sidebar_item;
        if(sidebar_item.name == SidebarItems.CATEGORY){
            if(this.props.genre && this.props.genre.parentid > 0){

                return (
                
                    <div>
                        <h3>{'header'}</h3>
                        <div className="list-group-container">
                           { listStations }
                        </div>
                    </div>
                )
            }else{
                return (
                
                    <div>
                        <h3>{'header'}</h3>
                        <div className="list-group-container">
                           { listGenres }
                        </div>
                    </div>
                )
            }
        } else {
            return (
                <div>
                    <h3>{'header'}</h3>
                    <div className="list-group-container">
                       { listStations }
                    </div>
                </div>
            )
        }

        
    }
}


const mapStateToProps = (state, ownProps) => ({
    genres: state.genres,
    genre:state.genre,
    stations:state.stations,
    sidebar_item:state.sidebar_item
})


export default withRouter(connect(
    mapStateToProps,
    { onGenreItemClick , onStationItemClick}
)(MainContent))