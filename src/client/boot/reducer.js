import {combineReducers} from "redux"
import {friendReducer} from "../ui-component/Friends/reducer.js"

// Combined all the reducers

export default combineReducers({
  friendReducer,
})
