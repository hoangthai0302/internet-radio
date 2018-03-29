import { ActionTypes } from '../constants'

const initialState = {
    playing: false,
    station:null
}

const playerReducer = (state = initialState, action) => {
    switch (action.type ) {
        case ActionTypes.TOGGLE_PLAY:
            return {
                ...state,
                playing:action.data
            }
        case ActionTypes.PLAY_STATION:
            return {
                ...state,
                station:action.data
            }
        default:
            return state
    }
}

export default playerReducer;