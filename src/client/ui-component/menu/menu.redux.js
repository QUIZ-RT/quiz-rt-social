
import {Store} from "../../boot/Store"
// State - To hold states

// State to track

// Reducer
export const menuReducer = (state, action) => {
  switch (action.type) {
  case "CurrentViewUpdate":
    return updateCurrentView(state, action)
  default:
    return state
  }
}

// subscribe
Store.subscribe(renderMenuView)
function renderMenuView() {
  console.log(Store.getState())
}

const updateCurrentView = (state, action) => {
  state.currentView = action.data
  return state
}

