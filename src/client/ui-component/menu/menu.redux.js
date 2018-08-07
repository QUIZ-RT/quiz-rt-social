// Reducer
export const menuReducer = (state = { menuReducer:{currentView: "login"} }, action) => {
    const statePrev = state
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
      return state;
    }
    return state;
}


