import {playChallengeOnPlayButton} from '../controller/shareChallenges.controller';

const htmlToTemplate = (htmlstr) => {
  const template = document.createElement("template")
  template.innerHTML = htmlstr
  return template.content
}
export const renderViewToContainer = (content, containerKey) => {
  const container = document.querySelector(containerKey)
  container.appendChild(content)
}
export const getShareChallengeTemplate = (dataList) => {
  const scContainerStr = `<div class="shareChallenges">        
    </div>`

  const scTable = `<table class="mdl-data-table mdl-js-data-table  mdl-shadow--2dp" id="shareChallengesTable">
                        <thead>
                            <tr>
                            <th class="mdl-data-table__cell--non-numeric">Challenge Id</th>
                            <th>Challenge Name</th>
                            <th>Option</th>
                            <th>Play</th>
                            </tr>
                        </thead>
                    </table>`
  const scContainerTemp = htmlToTemplate(scContainerStr)
  const scTableTemp = htmlToTemplate(scTable)
  const appendShareChellengesListContainer = scContainerTemp.querySelector(".shareChallenges")
  const appendShareChellengesTableContainer = scTableTemp.querySelector("#shareChallengesTable")
  let shareChallengesContentStr = ""
  dataList.forEach((item) => {
    shareChallengesContentStr +=
  `<tbody>
    <tr>
      <td class="mdl-data-table__cell--non-numeric">${item.challengeId}</td>
      <td>${item.challengeName}</td>
      <td><button class="shareChalBtn mdl-button mdl-js-button mdl-button--raised mdl-button--colored" id="shareChallengeButton_${item.challengeId}" data-toggle="modal" data-target="#shareFriendsModel">Share</button>
      <td><button class="sharePlayBtn mdl-button mdl-js-button mdl-button--raised mdl-button--colored playChallengeBtnCls" id ="playChallengeComp-${item.challengeId}-play">Play Challenge</button>
      </td>
    </tr>   
  </tbody>
</div>`;
  })
  const scContentTemp = htmlToTemplate(shareChallengesContentStr)
  appendShareChellengesTableContainer.appendChild(scContentTemp)
  appendShareChellengesListContainer.appendChild(appendShareChellengesTableContainer);
  return scContainerTemp
}

export const getFriendsToShareChallengeTemplate = (friends) => {
  const friendsDiv = `<aside id="shareChall-mdc-dialog"
  class="mdc-dialog"
  role="alertdialog"
  aria-labelledby="my-mdc-dialog-label"
  aria-describedby="my-mdc-dialog-description">
  <div class="mdc-dialog__surface">
    <header class="mdc-dialog__header">
      <h2 id="topic-mdc-dialog-label" class="mdc-dialog__header__title">
      </h2>
    </header>
    <section id="topic-mdc-dialog-description" class="mdc-dialog__body">
    <div class="friendsUsernames">
    </div> 
    </section> 
    <footer class="mdc-dialog__footer">
      <button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="submitSharedChallenge">Submit</button>
      <button type="button" class="mdc-button mdc-button--raised close-btn  mdc-dialog__footer__button mdc-dialog__footer__button--cancel">Close</button>
    </footer>     
  </div>
  <div class="mdc-dialog__backdrop"></div>
</aside>
`
  const friendsUl = `<ul class="demo-list-control mdl-list" id="friendsUl">
  </ul>`
  const friendsDivTemp = htmlToTemplate(friendsDiv)
  const friendsUlTemp = htmlToTemplate(friendsUl)
  const friendsDivContainer = friendsDivTemp.querySelector(".friendsUsernames")
  const friendsUlContainer = friendsUlTemp.querySelector("#friendsUl")
  let friendsUserNamesContentStr = ""
  let count = 0
  friends.forEach((friend) => {
    friendsUserNamesContentStr += `<li class="mdl-list__item" id="friendsLi">
    <span class="mdl-list__item-secondary-action">
        <label class="mdl-checkbox mdl-js-checkbox mdl-js-ripple-effect" for="checkbox-${++count}">
            <input type="checkbox" id="checkbox-${count}" class="mdl-checkbox__input" >
        </label>
    </span>
    <span class="mdl-list__item-primary-content">
      <i class="material-icons  mdl-list__item-avatar">person</i>
      <label id="useremail_${friend.userID}_${friend.displayName}">${friend.email}</label>
    </span>    
  </li>`
  })
  const friendsLi = htmlToTemplate(friendsUserNamesContentStr)
  friendsUlContainer.appendChild(friendsLi)
  friendsDivContainer.appendChild(friendsUlContainer)
  // const submitButton = `<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="submitSharedChallenge">
  //                           Submit
  //                       </button>`
  // const submitButtonTemp = htmlToTemplate(submitButton)
  // friendsDivContainer.appendChild(submitButtonTemp)
  return friendsDivTemp
}

