import { combineReducers } from 'redux'
import sidebarReducer from './core/sidebarReducer'
import genreReducer from './core/genreReducer'
import genresReducer from './core/genresReducer'
import stationReducer from './core/stationReducer'
import stationsReducer from './core/stationsReducer'
import playerReducer from './core/playerReducer'

export default combineReducers({
  sidebar_item:sidebarReducer,
  genre:genreReducer,
  genres:genresReducer,
  station:stationReducer,
  stations:stationsReducer,
  player:playerReducer
})

