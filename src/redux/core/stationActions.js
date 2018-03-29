
import {ActionTypes, ItemTypes} from '../constants'
import ApiService from '../api/ApiService'
import { playStream, play } from './playerActions'
import LocalStorageService from '../../utils/LocalStorageService'


export const onStationItemClick = (station) => async dispatch => {
    let streamUrl = await ApiService.fetchStationStreamUrl(station.url);
    station.streamUrl = streamUrl;
    dispatch(play(station));
    LocalStorageService.saveToRecent(station);
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

export const addToRecent = (station) => ({
    type: ActionTypes.ADD_TO_RECENT, 
    data:station
})
export const receiveStations = (data) => ({
    type: ActionTypes.RECEIVED_STATIONS, 
    data
})

