import { ActionTypes } from '../constants'

const initialState = {
    playing: false,
    streamUrl:null
}

const playerReducer = (state = initialState, action) => {
    switch (action.type ) {
        case ActionTypes.TOGGLE_PLAY:
            return {
                ...state,
                playing:action.data
            }
        default:
            return state
    }
}

export default playerReducer;