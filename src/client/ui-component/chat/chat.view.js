
import { Store } from '../../boot/Store'
import { updateChat } from "./chat.service"
function createHTMLElement(html) {
  const template = document.createElement("template")
  template.innerHTML = html
  return template.content.firstElementChild
}

// function createOnlineUsersView() {
//   const onlineUsersView = `<div class="onlineUsersContainer">
//         <div class="onlineUsersWraper">
//             <ul id="onlineUsers" class="mdc-list" aria-orientation="vertical"></ul>
//         </div>
//     </div>`

//   return createHTMLElement(onlineUsersView)
// }

function createchatSection() {
  const chatSection = `<section class="chat-module">

        <header class="chat-top-bar">
        </header>

        <ol class="discussion mdc-list">
        </ol>
        <div class="text-field-container">
            <div class="mdc-text-field text-field mdc-text-field--textarea mdc-text-field--upgraded chat-text-field-margin">
                <span id="notifyTyping"></span>
                <textarea id="txtChatMessage" class="mdc-text-field__input" placeholder="Type your message"></textarea>
                <div class="mdc-line-ripple" style="transform-origin: 105px center 0px;"></div>
            </div>
        </div>

    </section>`
  return createHTMLElement(chatSection)
}

function createChatHeaderLeft(name) {
  const headerLeft = `<div class="left">
          <span>
              <i class="material-icons chat-icon-message">
                  message
              </i>
          </span>
          <h1>${name}</h1>
          </div>`
  return createHTMLElement(headerLeft)
}

function chatboxScrollBottom() {
  $("ol.discussion").animate({ scrollTop: $("ol.discussion").prop("scrollHeight") })
}

function appendMessage(message, cssClass) {
  var messageTimestamp = new Date().toLocaleString("en-US", { hour: "numeric", minute: "numeric", hour12: true })
  var chatMessageTimestamp = "<label class=\"chatMessageTimestamp\">" + messageTimestamp + "</label>"
  if (message.type === "text") {
    const ol = document.querySelector("ol.discussion")
    ol.appendChild(createMsgLiElementSelf(message.text + chatMessageTimestamp, cssClass, message.name))
  }
  chatboxScrollBottom()
}

function loadChatBox(messages) {
  $(".chat-module").show()
  $("ol.discussion").html("").show()
  messages.forEach(function (message) {
    var cssClass = (message.name === Store.getState().makeChat.myUser.name) ? "self mdc-list-item" : "other mdc-list-item"
    updateChat(message).then(function () {

    })
    appendMessage(message, cssClass, message.name)
  })
  chatboxScrollBottom()
}

function clearChatNotificationCount(chatNotificationCount, userName) {
  chatNotificationCount[userName] = 0
  $("#" + userName + " label.chatNotificationCount").hide()
}

function selectUerChatBox(selectedUser) {
  let myFriend = {}
  let user = {}
  myFriend.socketId = selectedUser.socketId
  user.email = selectedUser.email
  user.displayName = selectedUser.displayName;
  user.Photo = selectedUser.photoURL;
  myFriend.user = user;
  Store.dispatch({
    type: "SELECT-FRIEND", myFriend: myFriend
  })
  //$(evt.target).addClass("active")
  clearChatNotificationCount(Store.getState().makeChat.chatNotificationCount, myFriend.user.email)
}

// function createLiElement(id, name) {
//   const dynamicLiElement = `<li id="${name}" class="mdc-list-item selectUerChatBox">
//     <span class="mdc-list-item__graphic material-icons green" aria-hidden="true">fiber_manual_record</span>${name}<label class="chatNotificationCount"></label></li>`
//   const liElement = createHTMLElement(dynamicLiElement)
//   liElement.addEventListener("click", selectUerChatBox)
//   liElement.userId = id
//   liElement.userName = name
//   return liElement
// }

function createMsgLiElementSelf(msg, cssClass, name) {
  const dynamicMsgLiElement = `<li >
      <div class="avatar">
          <img src=""  alt="${name}"/>
      </div>
      <div class="messages">
          <p>${msg}</p>
      </div>
      </li>`
  const liMsgElement = createHTMLElement(dynamicMsgLiElement)
  liMsgElement.className += cssClass
  return liMsgElement
}

function render() {
  let state = Store.getState();
  $("#onlineUsers").empty()
  state.makeChat.onlineUsers.forEach(function (user) {
    if (user.user.email !== state.makeChat.myUser.user.email) {
      //var liElement = createLiElement(user.id, user.name)
      //document.querySelector("#onlineUsers").appendChild(liElement)
      if (state.chatNotificationCount[user.user.email] !== undefined &&
        state.chatNotificationCount[user.user.email] !== 0) {
        $("#" + user.user.email + " label.chatNotificationCount").html(state.chatNotificationCount[user.user.email])
        $("#" + user.user.email + " label.chatNotificationCount").show()
      }
      if (state.makeChat.myFriend.user.email === user.user.email) {
        clearChatNotificationCount(state.chatNotificationCount, user.user.email)
      }
    }
  })
  const body = document.querySelector(".demo-list-action")
  if ($(".chat-module")[0] === undefined) {
    body.appendChild(createchatSection())
  }
  $(".chat-module").show()
    $("ol.discussion").show()
    $(".chat-top-bar").html("").show()
    document.querySelector(".chat-top-bar").appendChild(createChatHeaderLeft(state.makeChat.myFriend.user.displayName))
  // if (state.makeChat.onlineUsers.length >= 2 && state.makeChat.myFriend.name !== undefined) {
  //   $(".chat-module").show()
  //   $("ol.discussion").show()
  //   $(".chat-top-bar").html("").show()
  //   document.querySelector(".chat-top-bar").appendChild(createChatHeaderLeft(state.makeChat.myFriend.name))
  // }
  //$("#onlineUsers li").removeClass("active")
  $("#notifyTyping").text("")
  $("#txtChatMessage").val("").focus()

  if (state.makeChat.allChatMessages[state.makeChat.myFriend.user.email] !== undefined) {
    loadChatBox(state.makeChat.allChatMessages[state.makeChat.myFriend.user.email])
  }
  else {
    $("ol.discussion").html("")
  }
}

export const createChatContainer = (selectedUser) => {
  let state = Store.getState();
  state.makeChat.onlineUsers.forEach(function (user) {
    if (selectedUser.email === user.user.email) {
      selectedUser.socketId = user.socketId
    }
  })

  selectUerChatBox(selectedUser);
  Store.subscribe(render)
}

