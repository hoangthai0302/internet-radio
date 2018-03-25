
import {ActionTypes, ItemTypes} from '../constants'
import ApiService from '../api/ApiService'


export const onStationItemClick = (station) => dispatch => {
    console.log(station);
}

export const fetchStationsByGenre  = (genre) => async dispatch => {
    let data = await ApiService.getStationsByGenre(genre.id);
    if(data instanceof Array){
        data = data.map((item) => {
            return {
                ...item,
                type:ItemTypes.STATION,
            }
        })
        
        dispatch(receiveStations(data));
    }
} 

export const receiveStations = (data) => ({
    type: ActionTypes.RECEIVED_STATIONS, 
    data
})

