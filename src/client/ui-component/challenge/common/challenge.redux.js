import {Store} from "../../../boot/Store"


export const challengeReducer = (state = {}, action) => {
    const statePrev = {...state}
    const newState = Object.assign({}, statePrev)
    switch (action.type) {
    case "currentchallengeview":
      newState.currentView = action.dataItem
      return newState
    default:
      return Object.assign({}, ...state)
    }
}