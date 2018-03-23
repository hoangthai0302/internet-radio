import {ActionTypes, ItemTypes} from '../../constants'
import ApiService from '../../api/ApiService'


export const getSecondaryGenres  = (genre) => async dispatch => {
    let data = await ApiService.getSecondaryGenres(genre.id);
    if(data instanceof Array){
        data = data.map((item) => {
            return {
                ...item,
                text:item.name,
                type:ItemTypes.SECONDARY_GENRE,
            }
        })

        const payload = {
            genres:data,
            current_genre:genre
        }
        dispatch(getGenresSuccess(payload));
    }
} 
export const getStationsByGenre  = (genre) => async dispatch => {
    let data = await ApiService.getStationsByGenre(genre.id);
    if(data instanceof Array){
        data = data.map((item) => {
            return {
                ...item,
                type:ItemTypes.STATION,
            }
        })
        let payload = {
            stations: data,
            current_genre:genre
        }
        dispatch(getStationsSuccess(payload));
    }
} 



export const receivedDataListGroup = (data) => ({
    type: ActionTypes.RECEIVED_DATA_LIST_GROUP, 
    data
})


export const getGenresSuccess = (payload) => ({
    type: ActionTypes.GET_GENRES_SUCCESS, 
    genres:payload.genres,
    current_genre:payload.current_genre
})
export const getStationsSuccess = (payload) => ({
    type: ActionTypes.GET_STATIONS_SUCCESS, 
    stations:payload.stations,
    current_genre:payload.current_genre
})

