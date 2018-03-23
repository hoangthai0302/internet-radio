
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { getPrimaryGenres }  from './SidebarActions'
import {v4} from 'uuid'
import ListItem from '../../../react/ListItem/ListItem'

const defaultProps = {
  data: [
      { name:'RECENT', iconLeft:'fa fa-clock-o', active: false},
      { name:'FAVORITES', iconLeft:'fa fa-star-o', active: true},
      { name:'CATEGORY', iconLeft:'fa fa-list-ul', active: false},
      { name:'COUNTRY', iconLeft:'fa fa-globe', active: false},
      { name:'SEARCH', iconLeft:'fa fa-search', active: false}
  ]
};


class SidebarContainer extends React.Component {
  constructor(){
    super();
    this.onItemClick = this.onItemClick.bind(this);
  }
  componentDidMount(){
    
  }

  onItemClick(item){
    if(item.name == 'CATEGORY'){
      this.props.getPrimaryGenres()
    }

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

SidebarContainer.defaultProps = defaultProps;

export default withRouter(connect(
  null,
  {getPrimaryGenres}
)(SidebarContainer))


