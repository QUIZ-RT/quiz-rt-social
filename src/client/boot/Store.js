import {createStore} from "redux"
import reducer from "./reducer"

const initialState = {
  currentView: "",
  PopularTopic: [],
  FavoriteTopic: [],
  MyChallanges: [],
  Challenges: [],
}
console.log("asdfas")
export const store = createStore(reducer, initialState)

