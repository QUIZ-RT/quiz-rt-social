export const topicReducer = (state = {}, action) => {

  const statePrev = {...state}
  const newState = Object.assign({}, statePrev)
  switch (action.type) {
  case "GET_TOPIC":
    newState.TopicList = action.dataItem.topicList
    return newState
    break
  case "ADD_TOPIC":
  console.log(state)
    const data = Object.assign({}, state, action.payload)
    console.log(data)
    // return Object.assign({}, state.topics, action.payload)
    return data
  default:
    return newState
  }
}



