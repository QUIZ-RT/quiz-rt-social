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
      <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">Share</button>
      <td><button class="mdl-button mdl-js-button mdl-button--raised mdl-button--colored playChallengeBtnCls" id ="playChallengeComp-${item.challengeId}-play">Play Challenge</button>
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
  const friendsDiv = `<div class="friendsUsernames">
  </div>`
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
      ${friend}
    </span>    
  </li>`
  })
  const friendsLi = htmlToTemplate(friendsUserNamesContentStr)
  friendsUlContainer.appendChild(friendsLi)
  friendsDivContainer.appendChild(friendsUlContainer)
  const submitButton = `<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect mdl-button--accent" id="submitSharedChallenge">
                            Submit
                        </button>`
  const submitButtonTemp = htmlToTemplate(submitButton)
  friendsDivContainer.appendChild(submitButtonTemp)
  return friendsDivTemp
}

