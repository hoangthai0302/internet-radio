import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux';

import sidebarReducer from './core/sidebarReducer'
import genreReducer from './core/genreReducer'
import genresReducer from './core/genresReducer'
import stationReducer from './core/stationReducer'
import stationsReducer from './core/stationsReducer'
import playerReducer from './core/playerReducer'
import dirReducer from './core/dirReducer'
import dirsReducer from './core/dirsReducer'

export default combineReducers({
  router: routerReducer,
  
  sidebar_item:sidebarReducer,
  genre:genreReducer,
  genres:genresReducer,
  station:stationReducer,
  stations:stationsReducer,
  player:playerReducer,
  dir:dirReducer,
  dirs:dirsReducer
})

