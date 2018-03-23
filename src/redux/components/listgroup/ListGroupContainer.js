import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

import * as actions from './ListGroupActions'
import ListItem from '../../../react/ListItem/ListItem'
import StationItem from '../../../react/StationItem/StationItem'
import { ItemTypes, ScreenIDs } from '../../constants'


class ListGroupContainer extends React.Component {
    constructor(){
        super();
        this.onItemClick = this.onItemClick.bind(this);
    }

    componentDidMount() {
    }

    onItemClick(item) {
       
        if (item.type == ItemTypes.PRIMARY_GENRE) {
            this.props.getSecondaryGenres(item);
        }
        if (item.type == ItemTypes.SECONDARY_GENRE) {
            this.props.getStationsByGenre(item);
        }
        
        if(item.type == ItemTypes.STATION){

        }
    }

    render() {
        let header = '';
        if(this.props.data instanceof Array && this.props.data[0]){
            let item = this.props.data[0];
            if(item.type == ItemTypes.PRIMARY_GENRE || item.type == ItemTypes.SECONDARY_GENRE){
                header = 'Category'
            }
            if(item.type == ItemTypes.STATION){
                header = 'All Stations'
            }

        }
        const list = this.props.data.map((item) =>{
            if(item.type == ItemTypes.PRIMARY_GENRE || item.type == ItemTypes.SECONDARY_GENRE){

                return (
                    <ListItem 
                    key = {v4()}
                    text = {item.name}
                        onClick = { ()=>{ this.onItemClick(item) } }
                    />
                )
            }

            if(item.type == ItemTypes.STATION){
                return (
                    <StationItem 
                        key = {v4()}
                        name = {item.name}
                        logo = {item.logo || ''}
                        onClick = { ()=>{ this.onItemClick(item) } }
                    />
                )
            }
        })

        return (
            
            <div>
                <h3>{header}</h3>
                <div className="list-group-container">
                    {list}
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state, ownProps) => ({
    data: state.listGroupData.data,
    current_genre:state.listGroupData.current_genre,
    current_station:state.listGroupData.current_station
})


export default withRouter(connect(
    mapStateToProps,
    actions
)(ListGroupContainer))