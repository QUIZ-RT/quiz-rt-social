import {combineReducers} from "redux"
import {menuReducer} from "../ui-component/menu/menu.redux"
// import {dashboardReducer} from "../ui-component/dashboard/dashboard.redux"

// Combined all the reducers

export default combineReducers({
  menuReducer,
//   dashboardReducer,

})
