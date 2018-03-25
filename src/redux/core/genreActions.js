import {ActionTypes, ItemTypes} from '../constants'
import ApiService from '../api/ApiService'
import { fetchStationsByGenre } from './stationActions'

export const selectGenre = (data) => ({
    type: ActionTypes.SELECT_GENRE, 
    data
})

export const onGenreItemClick = (item) => dispatch => {
    dispatch(selectGenre(item));
    if(item.type == ItemTypes.PRIMARY_GENRE){
        fetchSecondaryGenres(item.id)(dispatch);
    }
    if(item.type == ItemTypes.SECONDARY_GENRE){
        fetchStationsByGenre(item)(dispatch);
    }
}

export const fetchPrimaryGenres  = () => async dispatch => {
    let data = await ApiService.fetchPrimaryGenres();
    if(data instanceof Array){
        data = data.map((item) => {
            return {
                ...item,
                type:ItemTypes.PRIMARY_GENRE
            }
        })
        dispatch({
            type: 'RECEIVED_GENRES', 
            data
        });
    }
} 

export const fetchSecondaryGenres = (parentId) => async dispatch => {
    let data = await ApiService.fetchSecondaryGenres(parentId);

    if(data instanceof Array){
        data = data.map((item) => {
            return {
                ...item,
                text:item.name,
                type:ItemTypes.SECONDARY_GENRE,
            }
        })

        dispatch(receiveGenres(data));
    }
}

export const receiveGenres = (data) => ({
    type: ActionTypes.RECEIVED_GENRES, 
    data
})

