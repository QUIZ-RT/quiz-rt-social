import {combineReducers} from "redux"
import {menuReducer} from "../ui-component/menu/menu.redux"
import {topicReducer} from "../ui-component/topics/topic.reducer"
// Combined all the reducers

export default combineReducers({
  menuReducer,
  topicReducer,
})
