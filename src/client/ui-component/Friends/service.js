import {Store} from "../../boot/Store"

function loadFriends(userName) {
  console.log("friend service - loadFriends")
  setTimeout(function() {
    const friends = []
    for (let i = 0; i < 10; i++) {
      friends.push({
        userName: "userName_" + i,
        firstName: "FirstName_" + i,
        lastName: "LastName_" + i,
        id: i,
      })
    }

    Store.dispatch({type: "FETCH_FRIENDS_RES", users: friends})
  }, 1000)
}

function loadPendingFriendReq(userName) {
  console.log("friend service - loadPendingFriendReq")
  setTimeout(function() {
    const friends = []
    for (let i = 0; i < 10; i++) {
      friends.push({
        userName: "userName_" + i,
        firstName: "FirstName_" + i,
        lastName: "LastName_" + i,
        id: i,
        req_id: i + 10,
      })
    }
    Store.dispatch({type: "FETCH_FRIENDS_PENDING_REQUEST_RES", users: friends})
  }, 3000)
}

function searchUsers(inputStr) {
  console.log("friend service - searchUsers")
  const friends = []
  for (let i = 0; i < 10; i++) {
    friends.push({
      userName: "userName_" + i,
      firstName: "FirstName_" + i,
      lastName: "LastName_" + i,
    })
  }
  Store.dispatch({type: "SEARCH_FRIENDS_RES", users: friends})
}

function sendFriendRequest(sender, reciever) {
  console.log("sendFriendRequest called")
}

function acceptFriendRequest(req_id) {
  console.log("friend service - accptFrinedRequest " + req_id)
  setTimeout(function() {
    Store.dispatch({type: "FETCH_FRIENDS_PENDING_REQUEST_REQ"})
  })
}

function rejectFriendRequest(req_id) {
  console.log("friend service - rejectFriendRequest " + req_id)
  setTimeout(function() {
    Store.dispatch({type: "FETCH_FRIENDS_PENDING_REQUEST_REQ"})
  })
}

export {loadFriends, loadPendingFriendReq, searchUsers, sendFriendRequest, acceptFriendRequest, rejectFriendRequest}
