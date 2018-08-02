import {getPopularTopicTemplate, renderViewToContainer, getFavTopicTemplate, getChallengesTemplate, getMyChallengesTemplate} from "./dashboard.view"
import {topicModalInitializeShow} from "../topic-modal/topic-modal.controller"
const popularTopicData = [
  {
    "id": "1",
    "Name": "Cricket",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "id": "2",
    "Name": "JavaScript",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "id": "3",
    "Name": "Information Tech",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
  {
    "id": "4",
    "Name": "Cricket",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "id": "5",
    "Name": "JavaScript",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "id": "6",
    "Name": "Information Tech",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
  {
    "id": "7",
    "Name": "Cricket",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "id": "8",
    "Name": "JavaScript",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "id": "9",
    "Name": "Information Tech",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
]

const challengeData = [
  {
    "Name": "Cricket",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "Name": "JavaScript",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "Name": "Information Tech",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  }, {
    "Name": "Cricket",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "Name": "JavaScript",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "Name": "Information Tech",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
  {
    "Name": "Cricket",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "Name": "JavaScript",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "Name": "Information Tech",
    "Img": "challenges001.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
]

// const challangeData = [
//   {
//     "Img": "topic002.png",
//   },
// ]

export const createPopularTopicSection = () => {
  const pTopictemp = getPopularTopicTemplate(popularTopicData, "Popular Topic")
  const pTopicitems = pTopictemp.querySelectorAll(".mdc-card")
  pTopicitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalInitializeShow(event)
    })
  })
  renderViewToContainer(pTopictemp, "main")
}
export const createFavoriteTopicSection = () => {
  const fTopictemp = getFavTopicTemplate(popularTopicData, "Favorite Topic")
  renderViewToContainer(fTopictemp, "main")
}
export const createChallengesSection = () => {
  const challengestemp = getChallengesTemplate(challengeData, "Challenges")
  renderViewToContainer(challengestemp, "main")
}
export const createMyChallengesSection = () => {
  const mychallengestemp = getMyChallengesTemplate(challengeData, "My Challenges")
  renderViewToContainer(mychallengestemp, "main")
}
