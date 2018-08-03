import {Store} from "../../boot/Store"

// Reducer
export const dashboardReducer = (state = {}, action) => {
    const statePrev = {...state}
    const newState = Object.assign({}, statePrev)
    switch (action.type) {
    case "GET_PopularTopic":
    newState.PopularTopicList = action.dataItem.PopularTopics
    return newState
    case "GET_FavoriteTopic":
    newState.FavoriteTopicList = action.dataItem.FavoriteTopics
    return newState
    default:
      return Object.assign({}, ...state)
    }
}





