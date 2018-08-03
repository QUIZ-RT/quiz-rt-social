export const topicReducer = (state = {}, action) => {

  const statePrev = {...state}
  const newState = Object.assign({}, statePrev)
  switch (action.type) {
  case "GET_TOPIC":
    newState.TopicList = action.dataItem.topicList
    return newState
    break
  case "ADD_TOPIC":
   //newState.topics = 
    return newState
    break
  default:
    return newState
  }
}



