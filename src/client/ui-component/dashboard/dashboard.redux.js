import {Store} from "../../boot/Store"

// Reducer
export const dashboardReducer = (state = {Action: "Init"}, action) => {
    const statePrev = state
    const newState = Object.assign({}, statePrev)
    switch (action.type) {
    case "GET_TopicData":
    newState.TopicList = action.dataItem.Topics
    newState.PopularTopicList = action.dataItem.PopularTopics
    newState.FavoriteTopicList = action.dataItem.FavoriteTopics
    newState.Action = action.type
    return newState
    break
    case "GET_ChallengeData":
    newState.ChallegeList = action.dataItem.Challeges
    newState.MyChallegeList = action.dataItem.MyChalleges
    newState.Action = action.type
    return newState
    break
    default:
      return state
    }
}





