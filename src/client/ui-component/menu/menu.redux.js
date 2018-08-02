
import {Store} from "../../boot/Store"
// State - To hold states

// State to track
// const actionList = []

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
Store.subscribe(renderView)

function renderView() {

}
