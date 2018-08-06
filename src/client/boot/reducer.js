import {combineReducers} from "redux"
import {menuReducer} from "../ui-component/menu/menu.redux"
import {dashboardReducer} from "../ui-component/dashboard/dashboard.redux"
import {topicReducer} from "../ui-component/topics/topic.reducer"
import {challengeReducer} from '../ui-component/challenge/common/challenge.redux'


export default combineReducers({
    menuReducer, dashboardReducer, topicReducer ,challengeReducer
})
