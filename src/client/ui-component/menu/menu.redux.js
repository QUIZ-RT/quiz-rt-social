
import {Store} from "../../boot/Store"
// State - To hold states

// State to track
const actionList = []

// Reducer
export const menuReducer = (state = {currentview: "dashboard"}, action) => {
  switch (action.type) {
  case "CurrentViewUpdate":
    return updateCurrentView(state, action)
  default:
    return state
  }
}

// subscribe
store.subscribe(renderView)

function renderView() {

}

const updateCurrentView = (state, action) => {
  actionList.push(action)
  state.currentview = action.dataItem
  return state
}

