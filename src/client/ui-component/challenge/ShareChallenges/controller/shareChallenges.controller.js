import {getShareChallengeTemplate, renderViewToContainer, getFriendsToShareChallengeTemplate} from "../view/shareChallenges.view"

const shareChallenges = [
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

export const createShareChallengesSection = () => {
  const shareChallengesData = getShareChallengeTemplate(shareChallenges)
  renderViewToContainer(shareChallengesData, "main")
}

export const ShareChallengesWithSelectedFriendsSection = () => {
  const shareChallengesWithFriendsData = getFriendsToShareChallengeTemplate(friends)
  renderViewToContainer(shareChallengesWithFriendsData, "main")
}
