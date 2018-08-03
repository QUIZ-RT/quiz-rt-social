import {createStore} from "redux"
import reducer from "./reducer"

const initialState = {
    currentView:"",
    PopularTopic:[],
    FavoriteTopic:[],
    MyChallanges:[],
    Challenges:[]
}

export const Store = createStore(reducer, initialState)
