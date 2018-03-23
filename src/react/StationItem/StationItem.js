
import React from 'react'
import './StationItem.css'

export default class StationItem extends React.Component {

    render() {
      let { onClick, name, active, logo } = this.props;
        let activeClass = active ? ' station-item--active' : '';
      return (
          <div className={"station-item" + activeClass}>
                <img className="station-item__img" src={logo}/>
                <a href='javascript:void(0)' onClick={onClick}>{name}</a>
          </div>
      )
    }
  }
  
