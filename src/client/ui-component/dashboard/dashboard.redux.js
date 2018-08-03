import {Store} from "../../boot/Store"

// Reducer
export const dashboardReducer = (state = {}, action) => {
    const statePrev = {...state}
    const newState = Object.assign({}, statePrev)
    switch (action.type) {
    case "GET_PopularTopic":
    newState.PopularTopic = action.dataItem.PopularTopic
    return newState
    case "GET_FavoriteTopic":
    newState.FavoriteTopic = action.dataItem.FavoriteTopic
    return newState
    default:
      return Object.assign({}, ...state)
    }
}





