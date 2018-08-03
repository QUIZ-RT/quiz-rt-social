import $ from "jquery"
import io from "socket.io-client"
import store from "./chat.reducer"
import "./chat.view"

var socket = io()
var allChatMessages = []

$(document).ready(function() {
  $(".chat-module").hide()
//   if (store.getState().myUser.id === undefined) {
//     loginMe()
//   }
})

// function loginMe() {
//   var person = prompt("Please enter your name:", "Test")
//   if (/([^\s])/.test(person) && person !== null && person !== "") {
//     socket.emit("newUser", person)
//     document.title = person
//   }
//   else {
//     location.reload()
//   }
// }

function notifyTyping() {
  socket.emit("notifyTyping", store.getState().myUser, store.getState().myFriend)
}

$("#txtChatMessage").on("keyup", notifyTyping)

socket.on("newUser", function(newUser) {
  store.dispatch({
    type: "NEW-USER", myUser: newUser,
  })
})

socket.on("notifyTyping", function(sender, recipient) {
  if (store.getState().myFriend.id === sender.id) {
    $("#notifyTyping").text(sender.name + " is typing ...")
  }
  setTimeout(function() {
    $("#notifyTyping").text("")
  }, 5000)
})

socket.on("onlineUsers", function(onlineUsers) {
  store.dispatch({
    type: "ONLINE-USERS", onlineUsers: onlineUsers,
  })
})

socket.on("userIsDisconnected", function(userId) {
  delete allChatMessages[userId]
  if (userId === store.getState().myFriend.id) {
    $(".chat-module").hide()
    $("ol.discussion").html("").hide()
  }
})

function submitfunction() {
  var message = {}; var text = $("#txtChatMessage").val()

  if (text !== "") {
    message.type = "text"
    message.text = text
    message.sender = store.getState().myUser.id
    message.receiver = store.getState().myFriend.id
    message.name = store.getState().myUser.name
    store.dispatch({
      type: "SEND-MSG", message: message,
    })
    socket.emit("chatMessage", message)
  }
  $("#txtChatMessage").val("").focus()
}

$("#txtChatMessage").keypress((event) => {
  const keycode = (event.keyCode ? event.keyCode : event.which)
  if (keycode === 13) {
    submitfunction()
  }
})

socket.on("chatMessage", function(message) {
  store.dispatch({
    type: "RECIEVE-MSG", message: message,
  })
})

