import {Store} from "../../boot/Store"


// Reducer
const menuReducer = (state = {}, action) => {
    const statePrev = {...state}
    const newState = Object.assign({}, statePrev)
    switch (action.type) {
    case "CurrentViewUpdate":
      newState.currentView = action.dataItem.Name
      return newState
    case "LoggedInUserInfo":
      newState.currentUserInfo = action.dataItem.UserInfo
      newState.currentView = action.dataItem.Name
      return newState
    default:
      return Object.assign({}, ...state)
    }
}

module.exports = menuReducer

