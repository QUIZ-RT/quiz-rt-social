import {getShareChallengeTemplate, renderViewToContainer, getFriendsToShareChallengeTemplate} from "../view/shareChallenges.view"
import {Store} from '../../../../boot/Store'
import {getUserChallenges} from "../service/shareChallenges.service"

var shareChallenges
export const createShareChallengesSection = (userId) => {
  getUserChallenges(userId).then(function(userChallenges) {
    //console.log("user challenges in controller" + JSON.stringify(userChallenges))
    //Store.dispatch({type: "SHARE_CHALLENGE", dataItem: userChallenges})
    shareChallenges = userChallenges
    const shareChallengesData = getShareChallengeTemplate(userChallenges)
    renderViewToContainer(shareChallengesData, "#challengeSection")
  })
}

const shareChallengesDummy = [
  {
    "sharedBy": "ghouse",
    "challengeId": "ch1",
    "shareToIds": ["raju", "ravi"],
    "timestamp": "today",
  },
  {
    "sharedBy": "govind",
    "challengeId": "ch2",
    "shareToIds": ["ram", "rajesh"],
    "timestamp": "today",
  },
  {
    "sharedBy": "ashok",
    "challengeId": "ch3",
    "shareToIds": ["raki", "remo"],
    "timestamp": "today",
  },
  {
    "sharedBy": "suri",
    "challengeId": "ch4",
    "shareToIds": ["ramesh", "suresh"],
    "timestamp": "today",
  },
]

const friends = ["TRavi", "TPrashanth", "TShyamal", "TSuresh", "TManju"]

// Store.subscribe(() => {
//   const currentState = Store.getState()
//   if(currentState.challengeReducer.currentView === 'shareChallenge'){
//     document.querySelector('#challengeSection').innerHTML = "";
//     const shareChallengesData = getShareChallengeTemplate(shareChallenges)
//      renderViewToContainer(shareChallengesData, "#challengeSection")
//   }
// })
// export const createShareChallengesSection = () => {
//   const shareChallengesData = getShareChallengeTemplate(shareChallenges)
//   renderViewToContainer(shareChallengesData, "main")
// }

export const ShareChallengesWithSelectedFriendsSection = () => {
  const shareChallengesWithFriendsData = getFriendsToShareChallengeTemplate(friends)
  renderViewToContainer(shareChallengesWithFriendsData, "main")
}
