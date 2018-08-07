import {Store} from "../../../boot/Store"


export const challengeReducer = (state = {}, action) => {
    const statePrev = {...state}
    const newState = Object.assign({}, statePrev)
    switch (action.type) {
    case "currentchallengeview":
      newState.currentView = action.dataItem;
      return newState
    case "CHALLENGE_TOPICS":
        newState.topics = action.dataItem;
        return newState;
    case "ChallengeScreenStat":
            newState.challengeSec = action.dataItem;
            return newState;
    case "ChallengeScreenStatReset":
            newState.challengeSec = undefined;
            return newState;
    default:
      return Object.assign({}, ...state)
    }
    return state;
}