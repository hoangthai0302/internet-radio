import { ActionTypes, SidebarItems } from '../constants'

const initialState = {
    name: SidebarItems.FAVOURITE
}

const sidebar = (state = initialState, action) => {
    switch (action.type ) {
        case ActionTypes.SELECT_SIDEBAR_ITEM:
            return action.data
        default:
            return state
    }
}

export default sidebar;