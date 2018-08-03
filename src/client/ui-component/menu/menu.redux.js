

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

