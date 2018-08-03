import {combineReducers} from "redux"
import menuReducer from "../ui-component/menu/menu.redux"

// Combined all the reducers
export default combineReducers({
  menuReducer,
})
