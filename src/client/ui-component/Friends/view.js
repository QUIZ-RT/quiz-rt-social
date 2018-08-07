var Material = require('exports-loader?componentHandler&MaterialRipple!material-design-lite/material.js');

const mainContainer = document.getElementById("quiz-maincontent")

const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  const retElement = template.content.firstElementChild
  console.log("Inside HTML to Template")
  // console.log(componentHandler)
  // componentHandler.upgradeElement(retElement)
  return retElement
}

const createFriendsComponent = () => {
  const friendContainer = htmlToTemplate(`<div class="mdl-js-layout mdl-layout--fixed-drawer">
    </div>`)
  return friendContainer
}

const createFriendsSideNav = () => {
  const friendSideNav = htmlToTemplate(`<div class="mdl-layout__drawer">
    <span class="mdl-layout-title">Friends</span>
    <nav class="mdl-navigation">
    <a class="mdl-navigation__link" id="add_friend" href="#">Add a Friend</a>
    <a class="mdl-navigation__link" id="list_of_friend" href="#">List of Friends</a>
    <a class="mdl-navigation__link" id="frnd_req" href="#">Friend Requests</a>
    <a class="mdl-navigation__link" id="chat" href="#">Chat</a>
    </nav>
    </div>`)
  return friendSideNav
}

const createFriendHeaderWithOutSearchBox = (headerName) => {
  const friendHeader = htmlToTemplate(`<div class="mdl-layout__content mdl-grid">
    <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <div class="mdl-layout-spacer">
            <span class="mdl-layout-title">${headerName}</span>
          </div>
        </div>
    </header>
  </div>`)
  return friendHeader
}

const createFriendHeaderWithSearchBox = (headerName) => {
  const friendHeader = htmlToTemplate(`<div class="mdl-layout__content mdl-grid">
    <header class="mdl-layout__header">
        <div class="mdl-layout__header-row">
          <div class="mdl-layout-spacer">
            <span class="mdl-layout-title">${headerName}</span>
          </div>
          <div class="mdl-textfield mdl-js-textfield mdl-textfield--expandable
            mdl-textfield--floating-label mdl-textfield--align-right">
              <label class="mdl-button mdl-js-button mdl-button--icon"
              for="fixed-header-drawer-exp">
                  <i class="material-icons">search</i>
              </label>
              <div class="mdl-textfield__expandable-holder">
                <input class="mdl-textfield__input" type="text" name="sample"
                id="fixed-header-drawer-exp">
              </div>
          </div>
        </div>
    </header>
  </div>`)
  return friendHeader
}

const createFriendMainContentContainer = () => {
  const mainContent = htmlToTemplate(`<div class="mdl-layout__content demo-list-action mdl-grid">
    </div>`)
  return mainContent
}

const createUserListContainer = () => {
  const usersContainer = htmlToTemplate(`<div class="demo-list-action mdl-list" style="width:100%;">
          </div>`)
  return usersContainer
}

const createSearchUserItem = (user) => {
  const item = htmlToTemplate(`<div class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>${user.firstName} ${user.lastName}</span>
              </span>
              <a class="mdl-list__item-secondary-action sendFriendRequest" href="#" user_id=${user.id}><i class="material-icons" user_id=${user.id}>add</i></a>
            </div>`)
  return item
}

const createFriendItem = (user) => {
  const item = htmlToTemplate(`<div class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>${user.firstName} ${user.lastName}</span>
              </span>
            </div>`)
  return item
}

const createFriendReqItem = (user) => {
  const item = htmlToTemplate(`<div class="mdl-list__item">
              <span class="mdl-list__item-primary-content">
                <i class="material-icons mdl-list__item-avatar">person</i>
                <span>${user.firstName} ${user.lastName}</span>
              </span>
              <span class="mdl-list__item-secondary-content" style="flex-direction: row;">
              <button class="mdl-list__item-secondary-action mdl-button mdl-js-button mdl-button--raised mdl-button--colored accept-Friend-Request" style="margin-right:10px;" req-id=${user.req_id}>
                Accept
              </button>
              <button class="mdl-list__item-secondary-action mdl-button mdl-js-button mdl-button--raised mdl-button--colored mdl-button--accent reject-Friend-Request" req-id=${user.req_id}>
                Reject
              </button>
            </span>
            </div>`)
  return item
}
const showProgressBar = () => {
  const item = htmlToTemplate(`<div class="mdl-progress mdl-js-progress mdl-progress__indeterminate" style="width:100%;">
    </div>`)
  return item
}
export const showSearchPageWithResult = (users) => {
  const friendComponent = createFriendsComponent()
  friendComponent.appendChild(createFriendsSideNav())
  friendComponent.appendChild(createFriendHeaderWithSearchBox("Search and make friends"))
  const mainContent = createFriendMainContentContainer()
  const usersContainer = createUserListContainer()
  mainContent.appendChild(usersContainer)

  users.forEach((user) => {
    usersContainer.appendChild(createSearchUserItem(user))
  })
  friendComponent.appendChild(mainContent)
  mainContainer.innerHTML = ""
  mainContainer.appendChild(friendComponent)
  componentHandler.upgradeAllRegistered()
  document.getElementsByTagName('body')[0].className = ""
}

export const showFriendList = (users) => {
  const friendComponent = createFriendsComponent()
  friendComponent.appendChild(createFriendsSideNav())
  friendComponent.appendChild(createFriendHeaderWithOutSearchBox("List of friends"))
  const mainContent = createFriendMainContentContainer()
  const usersContainer = createUserListContainer()
  mainContent.appendChild(usersContainer)

  users.forEach((user) => {
    usersContainer.appendChild(createFriendItem(user))
  })
  friendComponent.appendChild(mainContent)
  mainContainer.innerHTML = ""
  mainContainer.appendChild(friendComponent)
  componentHandler.upgradeAllRegistered()
  document.getElementsByTagName('body')[0].className = ""
}

export const showPendingFriendRequests = (users, showProgress) => {
  const friendComponent = createFriendsComponent()
  friendComponent.appendChild(createFriendsSideNav())
  friendComponent.appendChild(createFriendHeaderWithOutSearchBox("List of friends"))
  const mainContent = createFriendMainContentContainer()

  if (showProgress) {
    mainContent.appendChild(showProgressBar())
  }
  else {
    const usersContainer = createUserListContainer()
    mainContent.appendChild(usersContainer)

    users.forEach((user) => {
      usersContainer.appendChild(createFriendReqItem(user))
    })
  }

  friendComponent.appendChild(mainContent)
  mainContainer.innerHTML = ""
  mainContainer.appendChild(friendComponent)
  componentHandler.upgradeAllRegistered()
  document.getElementsByTagName('body')[0].className = ""
}
