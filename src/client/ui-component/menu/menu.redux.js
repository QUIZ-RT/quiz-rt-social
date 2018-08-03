
import {updateViewState} from "../../app"
import {Store} from "../../boot/Store"

// State - To hold states

// State to track

// Reducer
const menuReducer = (state = {}, action) => {
  switch (action.type) {
  case "CurrentViewUpdate":
    const statePrev = {...state}
    const newState = Object.assign({}, statePrev)
    newState.currentView = action.dataItem
    return newState
  default:
    return Object.assign({}, ...state)
  }
}

// subscribe
Store.subscribe(renderMenuView)
function renderMenuView() {
  const storeData = Store.Store.getState()
  updateViewState(storeData.currentView.Name)
}

module.exports = menuReducer
