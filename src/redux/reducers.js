import { combineReducers } from 'redux'
import sidebarReducer from './components/sidebar/SidebarReducer'
import listGroupReducer from './components/listgroup/ListGroupReducer'

export default combineReducers({
  sidebar: sidebarReducer,
  listGroupData: listGroupReducer
})

