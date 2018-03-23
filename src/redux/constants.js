//export const API_URL = "https://cors-anywhere.herokuapp.com/http://humax.vtuner.com/setupapp/humax/asp/browsexml/navXML.asp?gofile=GenreLevelThree-";
export const API_URL = 'https://cors-anywhere.herokuapp.com/http://api.shoutcast.com/';
export const API_KEY = 'um1mieaWqhc48cf9';

export const ActionTypes = {
    GET_GENRES_SUCCESS: 'LOAD_GENRES_SUCCESS',
    GET_STATIONS_SUCCESS:'GET_STATIONS_SUCCESS',
    LOAD_CATEGORIES_SUCCESS: 'LOAD_CATEGORIES_SUCCESS',

    RECEIVED_DATA_LIST_GROUP: 'RECEIVED_DATA_LIST_GROUP',

    SIDE_BAR_ITEM_SELECTED: 'SIDE_BAR_ITEM_SELECTED'
}

export const ItemTypes = {
    CATEGORY: 'CATEGORY',
    STATION: 'STATION',
    COUNTRY: 'COUNTRY',
    PRIMARY_GENRE:'PRIMARY_GENRE',
    SECONDARY_GENRE:'SECONDARY_GENRE',
}

export const ScreenIDs = {
    LIST_GENRE: 'LIST_GENRE',
    LIST_STATION: 'LIST_STATION',
}