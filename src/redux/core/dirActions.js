
import {ActionTypes, ItemTypes} from '../constants'
import ApiService from '../api/ApiService'
import DialogService from '../../utils/DialogService'
import { fetchStations } from './stationActions'


export const onDirItemClick = (dir) => dispatch => {
    dispatch(selectDir(dir));
    fetchStations(dir)(dispatch);
    
}

export const fetchGenreDirs = (genreName) => async dispatch => {
    let dirs = await ApiService.fetchGenreDirs(genreName);
    
    dispatch(receiveDirs(dirs));
    DialogService.hideLoading();
   
}

export const selectDir = (dir) => ({
    type: ActionTypes.SELECT_DIR, 
    data:dir
})

export const receiveDirs = (data) => ({
    type: ActionTypes.RECEIVED_DIRS, 
    data
})



