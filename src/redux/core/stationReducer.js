import { ActionTypes } from '../constants'

const initialState = null

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SELECT_STATION:
            return action.data
            
        default:
            return state
    }
}
