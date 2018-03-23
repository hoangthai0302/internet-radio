import ApiService from '../../api/ApiService'
import { ItemTypes, ActionTypes } from '../../constants'
import { getGenresSuccess } from '../listgroup/ListGroupActions'


export const getPrimaryGenres  = () => async dispatch => {
    let data = await ApiService.getPrimaryGenres();
    console.log(data)
    if(data instanceof Array){
        data = data.map((item) => {
            return {
                ...item,
                type:ItemTypes.PRIMARY_GENRE,
            }
        })
        dispatch(getGenresSuccess({
            genres:data
        }));
    }
} 


