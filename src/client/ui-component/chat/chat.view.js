
import store from "./chat.reducer"
function createHTMLElement(html) {
  const template = document.createElement("template")
  template.innerHTML = html
  return template.content.firstElementChild
}

function createOnlineUsersView() {
  const onlineUsersView = `<div class="onlineUsersContainer">
        <div class="onlineUsersWraper">
            <ul id="onlineUsers" class="mdc-list" aria-orientation="vertical"></ul>
        </div>
    </div>`

  return createHTMLElement(onlineUsersView)
}

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
  $("ol.discussion").animate({scrollTop: $("ol.discussion").prop("scrollHeight")})
}

function appendMessage(message, cssClass) {
  var messageTimestamp = new Date().toLocaleString("en-US", {hour: "numeric", minute: "numeric", hour12: true})
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
  messages.forEach(function(message) {
    var cssClass = (message.sender === store.getState().myUser.id) ? "self mdc-list-item" : "other mdc-list-item"

    appendMessage(message, cssClass, message.name)
  })
  chatboxScrollBottom()
}

function clearChatNotificationCount(chatNotificationCount, userId) {
  chatNotificationCount[userId] = 0
  $("#" + userId + " label.chatNotificationCount").hide()
}

function selectUerChatBox(evt) {
  var myFriend = {}
  myFriend.id = evt.target.userId
  myFriend.name = evt.target.userName
  store.dispatch({
    type: "SELECT-FRIEND", myFriend: myFriend,
  })
  $(evt.target).addClass("active")
  clearChatNotificationCount(store.getState().chatNotificationCount, myFriend.id)
}

function createLiElement(id, name) {
  const dynamicLiElement = `<li id="${id}" class="mdc-list-item selectUerChatBox">
    <span class="mdc-list-item__graphic material-icons green" aria-hidden="true">fiber_manual_record</span>${name}<label class="chatNotificationCount"></label></li>`
  const liElement = createHTMLElement(dynamicLiElement)
  liElement.addEventListener("click", selectUerChatBox)
  liElement.userId = id
  liElement.userName = name
  return liElement
}

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
//   const body = document.getElementsByTagName("body")[0]
//   if ($("#onlineUsers")[0] === undefined) {
//     body.appendChild(createOnlineUsersView())
//   }
//   if ($(".chat-module")[0] === undefined) {
//     body.appendChild(createchatSection())
//   }

  $("#onlineUsers").empty()
  store.getState().onlineUsers.forEach(function(user) {
    if (user.id !== store.getState().myUser.id) {
      var liElement = createLiElement(user.id, user.name)
      document.querySelector("#onlineUsers").appendChild(liElement)
      if (store.getState().chatNotificationCount[user.id] !== undefined &&
                store.getState().chatNotificationCount[user.id] !== 0) {
        $("#" + user.id + " label.chatNotificationCount").html(store.getState().chatNotificationCount[user.id])
        $("#" + user.id + " label.chatNotificationCount").show()
      }
      if (store.getState().myFriend.id === user.id) {
        clearChatNotificationCount(store.getState().chatNotificationCount, user.id)
      }
    }
  })

  if (store.getState().onlineUsers.length >= 2 && store.getState().myFriend.name !== undefined) {
    $(".chat-module").show()
    $("ol.discussion").show()
    $(".chat-top-bar").html("").show()
    document.querySelector(".chat-top-bar").appendChild(createChatHeaderLeft(store.getState().myFriend.name))
  }
  $("#onlineUsers li").removeClass("active")
  $("#notifyTyping").text("")
  $("#txtChatMessage").val("").focus()

  if (store.getState().allChatMessages[store.getState().myFriend.id] !== undefined) {
    loadChatBox(store.getState().allChatMessages[store.getState().myFriend.id])
  }
  else {
    $("ol.discussion").html("")
  }
}

export const createChatContainer = () => {
  const body = document.getElementsByTagName("main")[0]
  if ($("#onlineUsers")[0] === undefined) {
    body.appendChild(createOnlineUsersView())
  }
  if ($(".chat-module")[0] === undefined) {
    body.appendChild(createchatSection())
  }
  store.subscribe(render)
}

