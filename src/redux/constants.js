//export const API_URL = "https://cors-anywhere.herokuapp.com/http://humax.vtuner.com/setupapp/humax/asp/browsexml/navXML.asp?gofile=GenreLevelThree-";
export const API_URL = 'https://cors-anywhere.herokuapp.com/http://humax.vtuner.com/setupapp/humax/asp/browsexml/navXML.asp?gofile=';
export const API_KEY = 'um1mieaWqhc48cf9';
export const SEARCH_URL = 'https://cors-anywhere.herokuapp.com/http://humax.vtuner.com/setupapp/Company/asp/browsexpa/search.asp?sSearchtype=2&search=';

export const ActionTypes = {
    RECEIVED_GENRES: 'RECEIVED_GENRES',
    SELECT_GENRE:'SELECT_GENRE',
    RECEIVED_DIRS:'RECEIVED_DIRS',
    SELECT_DIR:'SELECT_DIR',

    
    PLAY_STATION:'PLAY_STATION',
    RECEIVED_STATIONS:'RECEIVED_STATIONS',
    ADD_TO_RECENT:'ADD_TO_RECENT',
    PLAY_STREAM:'PLAY_STREAM',

    SELECT_SIDEBAR_ITEM: 'SELECT_SIDEBAR_ITEM',


    SHOW_LOADING:'SHOW_LOADING',
    HIDE_LOADING:'HIDE_LOADING'
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
    FAVOURITE: 'FAVORITES',
    CATEGORY:'CATEGORY',
    COUNTRY:'COUNTRY',
    SEARCH:'SEARCH'
}

export const GENRES = [
    "Alternative",
    "Ambient",
    "Big Band",
    "Bluegrass",
    "Blues",
    "Business News",
    "Celtic",
    "Christian Contemporary",
    "Christian Rock",
    "Classic Rock",
    "Classical",
    "College",
    "Comedy",
    "Country",
    "Dance",
    "Electronica",
    "Folk",
    "Gospel",
    "Government",
    "Hard Rock",
    "Hip Hop",
    "Holiday",
    "Jazz",
    "Latin Hits",
    "New Age",
    "News",
    "News Talk",
    "News Updates",
    "Oldies",
    "Pop",
    "Public",
    "Radio Drama",
    "Reggae",
    "Religious",
    "RnB",
    "Rock",
    "Show Tunes",
    "Smooth Jazz",
    "Soft Rock",
    "Soundtracks",
    "Sports",
    "Talk",
    "Top 40",
    "Variety",
    "Weather",
    "World",
    "World Asia",
    "World Europe",
    "World Hawaiian",
    "World India",
    "World Middle East",
    "World Native American",
    "World Tropical"
]