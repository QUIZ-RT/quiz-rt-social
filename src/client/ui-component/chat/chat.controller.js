import $ from "jquery"
import io from "socket.io-client"
import { Store } from '../../boot/Store'
import { createChatContainer } from "./chat.view"

let socket = io()

export const loadChatContainer = (user) => {
  socket.on("newUser", function (newUser) {
    Store.dispatch({
      type: "NEW-USER", myUser: newUser,
    })
  })
  if (Store.getState().makeChat.myUser.user === undefined) {
    const currentState = Store.getState();
    let myUser = {};
    myUser.email = currentState.menuReducer.currentUserInfo.email;
    myUser.displayName = currentState.menuReducer.currentUserInfo.displayName;
    myUser.Photo = currentState.menuReducer.currentUserInfo.photoURL;
    socket.emit("newUser", myUser)
  }
  createChatContainer(user)
  //$(".chat-module").hide()
  $("#txtChatMessage").on("keyup", notifyTyping)



  socket.on("notifyTyping", function (sender, recipient) {
    if (Store.getState().makeChat.myFriend.socketId === sender.socketId) {
      $("#notifyTyping").text(sender.email + " is typing ...")
    }
    setTimeout(function () {
      $("#notifyTyping").text("")
    }, 5000)
  })

  socket.on("onlineUsers", function (onlineUsers) {
    Store.dispatch({
      type: "ONLINE-USERS", onlineUsers: onlineUsers,
    })
  })

  socket.on("userIsDisconnected", function (socketId) {
    delete Store.getState().makeChat.allChatMessages[socketId]
    if (socketId === Store.getState().makeChat.myFriend.socketId) {
      $(".chat-module").hide()
      $("ol.discussion").html("").hide()
    }
  })

  $("#txtChatMessage").keypress((event) => {
    const keycode = (event.keyCode ? event.keyCode : event.which)
    if (keycode === 13) {
      submitfunction()
    }
  })

  socket.on("chatMessage", function (message) {
    Store.dispatch({
      type: "RECIEVE-MSG", message: message,
    })
  })


  //loginMe()
}

// $(document).ready(function() {
//
// //   if (Store.getState().myUser.id === undefined) {
// //     loginMe()
// //   }
// })

function loginMe() {
  var person = prompt("Please enter your name:", "Test")
  if (/([^\s])/.test(person) && person !== null && person !== "") {

    document.title = person
  }
  else {
    location.reload()
  }
}

function notifyTyping() {
  socket.emit("notifyTyping", Store.getState().makeChat.myUser, Store.getState().makeChat.myFriend)
}

function submitfunction() {
  var message = {}; var text = $("#txtChatMessage").val()

  if (text !== "") {
    let state = Store.getState();
    message.type = "text"
    message.text = text
    message.sender = state.makeChat.myUser.socketId
    message.receiver = state.makeChat.myFriend.socketId
    message.semail = state.makeChat.myUser.user.email
    message.remail = state.makeChat.myFriend.user.email
    Store.dispatch({
      type: "SEND-MSG", message: message,
    })
    socket.emit("chatMessage", message)
  }
  $("#txtChatMessage").val("").focus()
}

