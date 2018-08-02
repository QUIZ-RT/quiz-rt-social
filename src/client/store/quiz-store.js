import {combineReducers, createStore} from "redux"

import {topicReducer} from "../ui-component/topics/topic.reducer"

const rootReducer = combineReducers({topicReducer})

export const quizStore = createStore(rootReducer)
