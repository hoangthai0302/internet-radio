import { ActionTypes } from '../constants'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.RECEIVED_STATIONS:
            return action.data
            
        default:
            return state
    }
}
