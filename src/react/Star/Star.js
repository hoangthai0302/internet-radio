import React from 'react'
import './style.css'

const Star = ({onClick, active}) => {

   let activeClass = active ? ' fa-star' : ' fa-star-o';

    return (
        <i className={'star-item star fa' + activeClass} onClick = {onClick}></i>
    )
    
}
export default Star;
