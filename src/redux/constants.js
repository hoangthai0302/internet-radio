//export const API_URL = "https://cors-anywhere.herokuapp.com/http://humax.vtuner.com/setupapp/humax/asp/browsexml/navXML.asp?gofile=GenreLevelThree-";
export const API_URL = 'https://cors-anywhere.herokuapp.com/http://api.shoutcast.com/';
export const API_KEY = 'um1mieaWqhc48cf9';

export const ActionTypes = {
    RECEIVED_GENRES: 'RECEIVED_GENRES',
    SELECT_GENRE:'SELECT_GENRE',

    
    SELECT_STATION:'SELECT_STATION',
    RECEIVED_STATIONS:'RECEIVED_STATIONS',

    SELECT_SIDEBAR_ITEM: 'SELECT_SIDEBAR_ITEM'
}

export const ItemTypes = {
    CATEGORY: 'CATEGORY',
    STATION: 'STATION',
    COUNTRY: 'COUNTRY',
    PRIMARY_GENRE:'PRIMARY_GENRE',
    SECONDARY_GENRE:'SECONDARY_GENRE',
}

export const SidebarItems = {
    RECENT: 'RECENT',
    FAVOURITE: 'FAVOURITE',
    CATEGORY:'CATEGORY',
    COUNTRY:'COUNTRY',
    SEARCH:'SEARCH'
}