
import React from 'react'
import './StationItem.css'
import Star from '../Star/Star'
import LocalStorageService from '../../utils/LocalStorageService';


export default class StationItem extends React.Component {
    constructor(){
        super();
    }



    render() {
        let { onClick, item } = this.props;

        let onFavouriteClick = () => {
            LocalStorageService.toggleFavourite(item);
            this.setState({});
        }

        let activeClass = item.active ? ' station-item--active' : '';
        let isFavourite = LocalStorageService.isFavourite(item.id);

        function debounce(fn, delay) {
            let timer = null;
            return function() {
                let context = this;
                let args = arguments;
                clearTimeout(timer);
                timer = setTimeout(function() {
                    fn.apply(context, args);
                }, delay);
            }
        }

        let debounceClick = debounce(onClick, 350);

        return (
            <div className={"station-item" + activeClass}>
                
                <a href='javascript:void(0)' onClick={ debounceClick }>
                    <img className="station-item__img" src={item.logo}/>
                    <span>{item.name}</span>
                </a>
                <Star active = {isFavourite} onClick={ onFavouriteClick } />
            </div>
        )
    }
}
  
