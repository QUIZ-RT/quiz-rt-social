import {Store} from "../../boot/Store"
import {showSearchPageWithResult, showFriendList, showPendingFriendRequests} from "./view"

function addFriendLinkClicked(event) {
  console.log("add friend link clicked")
  Store.dispatch({type: "SHOW_FRIENDS_CHAT"})
}

function listOfFriendsClicked(event) {
  console.log("list of friend link clicked")
  Store.dispatch({type: "FETCH_FRIENDS_REQ"})
}

function showPendingFriendReq(event) {
  console.log("show pending friend req clicked")
  Store.dispatch({type: "FETCH_FRIENDS_PENDING_REQUEST_REQ"})
}

function acceptFriendRequest(event) {
  console.log("accept Friend Request controller")
  console.log(event)
  Store.dispatch({type: "ACCEPT_FRINED_REQUEST", req_id: event.target.getAttribute("req-id")})
}

function rejectFriendRequest(event) {
  console.log("reject Friend Request controller")
  console.log(event)
  Store.dispatch({type: "REJECT_FRINED_REQUEST", req_id: event.target.getAttribute("req-id")})
}

function render() {
  console.log("in friends new controller")
  const state = Store.getState().friendReducer
  console.log(state)
  if (state.SELECTED_PAGE === "FRIENDS_AND_CHAT") {
    console.log("in friends controller selected page")
    if (state.friendsAndChat.page === "DEFAULT") {
      console.log("in friends controller DEFAULT page")
      showSearchPageWithResult([])
    }
    else if (state.friendsAndChat.page === "FRIENDS_LOADED") {
      console.log("in friends controller FRIENDS loaded page")
      showFriendList(state.friendsAndChat.friends)
    }
    else if (state.friendsAndChat.page === "FRIENDS_PENDING_REQUEST_LOADED") {
      console.log("in friends controller FRIENDS pending request loaded page")
      showPendingFriendRequests(state.friendsAndChat.pendingFriendRequest, false)
    }
    else if (state.friendsAndChat.page === "FRIENDS_PENDING_REQUEST_NOT_LOADED") {
      console.log("in friends controller FRIENDS pending request not loaded page")
      showPendingFriendRequests(state.friendsAndChat.pendingFriendRequest, true)
    }
  }
}

Store.subscribe(render)

$("body").on("click", "#add_friend", addFriendLinkClicked)
$("body").on("click", "#list_of_friend", listOfFriendsClicked)
$("body").on("click", "#frnd_req", showPendingFriendReq)
$("body").on("click", ".accept-Friend-Request", acceptFriendRequest)
$("body").on("click", ".reject-Friend-Request", rejectFriendRequest)
