import {Store} from "../../boot/Store"
import {updateViewState} from "../../app"

// Reducer
const menuReducer = (state = {}, action) => {
    const statePrev = {...state}
    const newState = Object.assign({}, statePrev)
    newState.actionType = action.type
    switch (action.type) {
    case "CurrentViewUpdate":
      newState.currentView = action.dataItem
      return newState
    case "CurrentUserInfoUpdate":
      newState.currentUserInfo = action.dataItem
      return newState
    default:
      return Object.assign({}, ...state)
    }
}

module.exports = menuReducer

