import {createStore} from "redux"
import {createPopularTopicSection, createFavoriteTopicSection} from "./dashboard.controller"

// State - To hold states
const state = []

// State to track
let actionList = []

// Reducer
export const dashboardReducer = (state = {PopularTopic:[], FavoriteTopic:[], MyChallanges:[], Challenges:[]}, action) => {
  switch (action.type) {
  case "GET_PopularTopic":
    return getPopularTopicReducer(state, action)
  case "GET_FavoriteTopic":
    return getFavoriteTopicReducer(state, action)
  default:
    return state
  }
}

//subscribe
store.subscribe(renderView)
function renderView() {
const currentActionType = actionList[actionList.length - 1].type

  if(currentActionType == "GET_PopularTopic") {
    createPopularTopicSection()
  }
  else if(currentActionType == "GET_FavoriteTopic") {

  }
}

// GET Popular Topic method
const getPopularTopicReducer = (state, action) => {
  actionList.push(action)
  state.PopularTopic = action.dataItem
  return state
}

// GET Favorite Topic method
const getFavoriteTopicReducer = (state, action) => {
  actionList.push(action)
  state.FavoriteTopic = action.dataItem
  return state
}


const getStateData = () => {
  return state.getState()
}

