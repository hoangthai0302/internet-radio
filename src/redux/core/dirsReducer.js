import { ActionTypes } from '../constants'

const initialState = []

export default (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.RECEIVED_DIRS:
            return action.data
        default:
            return state
    }
}