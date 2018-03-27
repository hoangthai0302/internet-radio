import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import {v4} from 'uuid'
import { bindActionCreators } from 'redux'

import ListItem from '../../react/ListItem/ListItem'
import BackButton from '../../react/BackButton/BackButton'
import { ItemTypes, SidebarItems, GENRES} from '../constants'

import { fetchGenreDirs, onDirItemClick } from '../core/dirActions'

class DirBox extends React.Component {

    componentDidMount(){
        let currentGenre = this.props.match.params.genre;
        this.props.fetchGenreDirs(currentGenre);
    }

    render() {
        let currentGenre = this.props.match.params.genre;

        let handleClick = (item)=>{
            this.props.history.push('/category/' + currentGenre + '/' + item.name);
            this.props.onDirItemClick(item)
        }

        const listDirs = this.props.dirs.map((item) =>{
            return (
                <ListItem 
                key = {v4()}
                text = {item.name}
                    onClick = { ()=>{ handleClick(item) }}
                />
            )
        })

        return (
            
            <div>
                <h3 className="flex-container">
                    <BackButton onClick={()=>{ this.props.history.push('/category')} }/>
                    {currentGenre}
                </h3>
                <div className="list-group-container">
                    { listDirs }
                </div>
            </div>
        )
       
        
    }
}

const mapStateToProps = (state, ownProps) => ({
    dirs:state.dirs,
    genre:state.genre,
})


export default withRouter(connect(
    mapStateToProps,
    { fetchGenreDirs, onDirItemClick }
)(DirBox))



