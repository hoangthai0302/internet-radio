import {ActionTypes, ItemTypes} from '../constants'
import ApiService from '../api/ApiService'
import DialogService from '../../utils/DialogService'
import { fetchGenreDirs } from './dirActions'

export const selectGenre = (data) => ({
    type: ActionTypes.SELECT_GENRE, 
    data
})

export const onGenreItemClick = (genre) => dispatch => {
    dispatch(selectGenre(genre));
    fetchGenreDirs(genre)(dispatch);
}

export const fetchGenres  = () => async dispatch => {
    let data = await ApiService.fetchGenres();
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



export const receiveGenres = (data) => ({
    type: ActionTypes.RECEIVED_GENRES, 
    data
})

