import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

import { ItemTypes, SidebarItems, GENRES} from '../constants'
import LocalStorageService from '../../utils/LocalStorageService'
import StationItemContainer from './StationItemContainer'
import ApiService from '../api/ApiService';

import { onStationItemClick } from '../core/stationActions'

class Search extends React.Component {

    constructor(){
        super();
        this.state = {
            stations:[]
        }
    }

    componentDidMount(){

    }

    render() {
        
        let search =  async () =>{
            let q = this.input.value;
            let stations = await ApiService.search(q);
            this.setState({stations});
        }

        const listStations = this.state.stations.map((item) =>{
            return (
                <StationItemContainer 
                    key = {v4()}
                    item = {item}
                />
            )
        })

        return (
        
            <div>
                <h3>Search</h3>
                <input type="text" ref={ (el) => { this.input = el;}}/> 
                <button onClick = { ()=> {search(this.q) }}>Search</button>

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
)(Search))


