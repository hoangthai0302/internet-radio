
import React from 'react'
import './ListItem.css'

export default class ListItem extends React.Component {

    render() {
      let { onClick, text, active, iconLeft } = this.props;
        let activeClass = active ? ' list-item--active' : '';
      return (
          <div className={"list-item" + activeClass}>
                <i className={iconLeft}></i>
                <a href='javascript:void(0)' onClick={onClick}>{text}</a>
          </div>
      )
    }
  }
  
