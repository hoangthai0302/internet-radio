import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'


import ListItem from '../../react/ListItem/ListItem'
import StationItem from '../../react/StationItem/StationItem'
import { ItemTypes, SidebarItems, GENRES} from '../constants'

import { onGenreItemClick } from '../core/genreActions'
import { onStationItemClick } from '../core/stationActions'
import { onDirItemClick } from '../core/dirActions'


class MainContent extends React.Component {

    render() {
        const listGenres = GENRES.map((item) =>{
            return (
                <ListItem 
                key = {v4()}
                text = {item}
                    onClick = { ()=>{ this.props.onGenreItemClick(item) } }
                />
            )
        })

        let genre = this.props.genre;

        const listDirs = this.props.dirs.map((item) =>{
            return (
                <ListItem 
                key = {v4()}
                text = {item.name}
                    onClick = { ()=>{ this.props.onDirItemClick(item) } }
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
            if(this.props.dir){
                return (
                    <div>
                        <h3>{'header'}</h3>
                        <div className="list-group-container">
                            { listStations }
                        </div>
                    </div>
                )
            }else
            if(this.props.genre){
                return (
                    <div>
                        <h3>{'header'}</h3>
                        <div className="list-group-container">
                            { listDirs }
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
    dirs:state.dirs,
    dir:state.dir,
    stations:state.stations,
    sidebar_item:state.sidebar_item
})


export default withRouter(connect(
    mapStateToProps,
    { onGenreItemClick , onStationItemClick, onDirItemClick }
)(MainContent))