import {ActionTypes, ItemTypes} from '../constants'
import ApiService from '../api/ApiService'


export const playStream = (streamUrl) => ({
    type: ActionTypes.PLAY_STREAM, 
    data: streamUrl
})

