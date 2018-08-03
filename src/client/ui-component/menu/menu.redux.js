
// import {store} from "../../boot/Store"
const store = require("./../../boot/Store")
// State - To hold states

// State to track

// Reducer
const menuReducer = (state = {}, action) => {
  switch (action.type) {
  case "CurrentViewUpdate":
    return Object.assign({}, ...state, action.dataItem)
  default:
    return Object.assign({}, ...state)
  }
}

module.exports = menuReducer

// subscribe
store.subscribe(renderMenuView)
function renderMenuView() {
  console.log(store.getState())
}

const updateCurrentView = (state, action) => {
  state.currentView = action.data
  return state
}
