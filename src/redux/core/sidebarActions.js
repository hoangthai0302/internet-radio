import ApiService from '../api/ApiService'
import { ItemTypes, ActionTypes, SidebarItems } from '../constants'
import { fetchGenres } from './genreActions'


export const onSidebarItemClick = (item) => async dispatch => {
    dispatch(selectSidebarItem(item))
}

export const selectSidebarItem = (item) => ({
    type: ActionTypes.SELECT_SIDEBAR_ITEM, 
    data:item
})
