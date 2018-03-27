import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'

import { ItemTypes, SidebarItems, GENRES} from '../constants'
import ListItem from '../../react/ListItem/ListItem'

class GenreBox extends React.Component {

    componentDidMount(){

    }

    render() {
        const listGenres = GENRES.map((item) =>{
            return (
                <ListItem 
                key = {v4()}
                text = {item}
                    onClick = { ()=>{ this.props.history.push('/category/' + item); } }
                />
            )
        })

        return (
        
            <div>
                <h3>Category</h3>
                <div className="list-group-container">
                    { listGenres }
                </div>
            </div>
        )
       
        
    }
}

const mapStateToProps = (state, ownProps) => ({
    genres: state.genres,
    genre:state.genre,
})

export default withRouter(connect(
    mapStateToProps,
    null
)(GenreBox))


