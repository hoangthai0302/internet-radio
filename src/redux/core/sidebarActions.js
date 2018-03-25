import ApiService from '../api/ApiService'
import { ItemTypes, ActionTypes, SidebarItems } from '../constants'
import { fetchPrimaryGenres } from './genreActions'


export const onSidebarItemClick = (item) => async dispatch => {
    dispatch(selectSidebarItem(item))
    
    if(item.name == SidebarItems.CATEGORY){
        dispatch(fetchPrimaryGenres())
    }
}

export const selectSidebarItem = (item) => ({
    type: ActionTypes.SELECT_SIDEBAR_ITEM, 
    data:item
})
