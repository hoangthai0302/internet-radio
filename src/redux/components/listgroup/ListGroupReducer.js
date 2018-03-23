import {
    ActionTypes
} from '../../constants'

const initialState = {
    data: [],
    current_genre: null,
    current_station:null
};

export default (state = initialState, action) => {
    switch (action.type) {

        case ActionTypes.GET_GENRES_SUCCESS:
            state = { 
                ...state,
                data:action.genres,
                current_genre:action.current_genre
            };
            return state;
        case ActionTypes.GET_STATIONS_SUCCESS:
            state = { 
                ...state,
                data:action.stations,
                current_genre:action.current_genre,
            };
            return state;
        default:
            return state
    }
}
