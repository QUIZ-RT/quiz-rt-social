import {loadFriends, loadPendingFriendReq, searchUsers, sendFriendRequest, acceptFriendRequest, rejectFriendRequest} from "./service"

export const friendReducer = (currentState = { }, action) => {
  console.log("inside friendReducer")
  const newState = currentState
  switch (action.type) {
  case "SHOW_FRIENDS_CHAT" :
    console.log("inside SHOW_FRIENDS_CHAT")
    newState.SELECTED_PAGE = "FRIENDS_AND_CHAT"
    newState.friendsAndChat = {
      page: "DEFAULT",
      friends: [],
      pendingFriendRequest: [],
    }
    break
  case "FETCH_FRIENDS_REQ" :
    console.log("inside FETCH_FRIENDS_REQ")
    newState.friendsAndChat = {
      page: "FRIENDS_NOT_LOADED",
      friends: [],
      pendingFriendRequest: [],
    }
    loadFriends(currentState.userName)
    break
  case "FETCH_FRIENDS_RES" :
    console.log("inside FETCH_FRIENDS_RES")
    newState.friendsAndChat = {
      page: "FRIENDS_LOADED",
      friends: action.users,
      pendingFriendRequest: [],
    }
    break
  case "FETCH_FRIENDS_PENDING_REQUEST_REQ":
    console.log("inside FETCH_FRIENDS_PENDING_REQUEST_REQ")
    newState.friendsAndChat = {
      page: "FRIENDS_PENDING_REQUEST_NOT_LOADED",
      friends: currentState.friendsAndChat.friends,
      pendingFriendRequest: [],
    }
    loadPendingFriendReq(currentState.userName)
    break
  case "FETCH_FRIENDS_PENDING_REQUEST_RES":
    console.log("inside FETCH_FRIENDS_PENDING_REQUEST_RES")
    newState.friendsAndChat = {
      page: "FRIENDS_PENDING_REQUEST_LOADED",
      friends: currentState.friendsAndChat.friends,
      pendingFriendRequest: action.users,
    }
    break
  case "SEARCH_FRIENDS_REQ":
    console.log("inside SEARCH_FRIENDS_REQ")
    newState.friendsAndChat = {
      page: "SEARCH_FRIENDS_NOT_LOADED",
      friends: currentState.friendsAndChat.friends,
      pendingFriendRequest: currentState.friendsAndChat.pendingFriendRequest,
    }
    searchUsers(action.value)
    break
  case "SEARCH_FRIENDS_RES":
    console.log("inside SEARCH_FRIENDS_RES")
    newState.friendsAndChat = {
      page: "SEARCH_FRIENDS_LOADED'",
      friends: currentState.friendsAndChat.friends,
      pendingFriendRequest: currentState.friendsAndChat.pendingFriendRequest,
      searchResult: action.users,
    }
    break
  case "SEND_FRIEND_REQ":
    console.log("inside SEND_FRIEND_REQ")
    sendFriendRequest(currentState.userName, action.reciever)
    break
  case "ACCEPT_FRINED_REQUEST":
    console.log("inside accept friend req")
    acceptFriendRequest(action.req_id)
    break
  case "REJECT_FRINED_REQUEST":
    console.log("inside reject friend req")
    rejectFriendRequest(action.req_id)
    break
  default:
  }

  return newState
}
