// import {Store} from "../../boot/Store"
const store = require("../../boot/Store")
// import {createPopularTopicSection, createFavoriteTopicSection} from "./dashboard.controller"

// Reducer
export const dashboardReducer = (state, action) => {
  switch (action.type) {
  case "GET_PopularTopic":
    return getPopularTopicReducer(state, action)
  case "GET_FavoriteTopic":
    return getFavoriteTopicReducer(state, action)
  default:
    return state
  }
}

// subscribe
store.subscribe(renderDashboardView)
function renderDashboardView() {

}

// GET Popular Topic method
const getPopularTopicReducer = (state, action) => {
  state.PopularTopic = action.dataItem
  return state
}

// GET Favorite Topic method
const getFavoriteTopicReducer = (state, action) => {
  state.FavoriteTopic = action.dataItem
  return state
}

