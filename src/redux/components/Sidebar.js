
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { onSidebarItemClick }  from '../core/sidebarActions'
import  { fetchGenres } from '../core/genreActions'
import {v4} from 'uuid'
import ListItem from '../../react/ListItem/ListItem'
import { SidebarItems } from '../constants'

const defaultProps = {
  data: [
      { name:SidebarItems.RECENT, iconLeft:'fa fa-clock-o', active: false},
      { name:SidebarItems.FAVOURITE, iconLeft:'fa fa-star-o', active: true},
      { name:SidebarItems.CATEGORY, iconLeft:'fa fa-list-ul', active: false},
      { name:SidebarItems.COUNTRY, iconLeft:'fa fa-globe', active: false},
      { name:SidebarItems.SEARCH, iconLeft:'fa fa-search', active: false}
  ]
};


class Sidebar extends React.Component {
  constructor(){
    super();
    this.onItemClick = this.onItemClick.bind(this);
  }
  componentDidMount(){
    
  }

  onItemClick(item){
    this.props.onSidebarItemClick(item);
    for(let item of this.props.data){
      item.active = false;
    }
    item.active = true;
    this.setState({})
  }

  render() {
    const list = this.props.data.map((item) =>{
       return (
         <ListItem 
          key = {v4()}
            text = {item.name}
            onClick = { ()=>{ this.onItemClick(item) } }
            iconLeft = { item.iconLeft}
            active = { item.active }
         />
       )
    })
    return (
      <div>
        {list}
      </div>
    )
  }
}

Sidebar.defaultProps = defaultProps;

export default withRouter(connect(
  null,
  {onSidebarItemClick,  fetchGenres}
)(Sidebar))


