
import {ActionTypes, ItemTypes} from '../constants'
import ApiService from '../api/ApiService'
import { playStream } from './playerActions'


export const onStationItemClick = (station) => async dispatch => {
    let streamUrl = await ApiService.fetchStationStreamUrl(station.url);
    dispatch(playStream(streamUrl));
}

export const fetchStations  = (dir) => async dispatch => {
    let data = await ApiService.fetchStations(dir.url);
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

