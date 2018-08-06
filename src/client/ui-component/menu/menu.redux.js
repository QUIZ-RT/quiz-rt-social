import {Store} from "../../boot/Store"


// Reducer
export const menuReducer = (state = {} , action) => {
    //const statePrev = {...state}
    //const newState = Object.assign({}, statePrev)
    const newState = {}
    if(state.currentUserInfo) {
      newState.currentUserInfo = state.currentUserInfo  
    }

    if(state.currentView) {
      newState.currentView = state.currentView
    }
    
    console.log("am in menu reducer")
    console.log(newState);
    console.log(state)

    switch (action.type) {
    case "CurrentViewUpdate":
      console.log("CurrentViewUpdate");
      console.log("action");
      newState.currentView = action.dataItem.Name
      //return newState
    case "LoggedInUserInfo":
      newState.currentUserInfo = action.dataItem.UserInfo
      newState.currentView = action.dataItem.Name
      //return newState
    default:
      //return Object.assign({}, ...state)
    }

    return newState
}


