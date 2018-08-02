
// import {store} from "../../boot/Store"
const store = require("./../../boot/Store")
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
store.subscribe(renderMenuView)
function renderMenuView() {
  console.log(store.getState())
}

const updateCurrentView = (state, action) => {
  state.currentView = action.data
  return state
}

