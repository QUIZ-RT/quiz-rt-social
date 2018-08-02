import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection, createFavoriteTopicSection, createChallengesSection, createMyChallengesSection} from "./ui-component/dashboard/dashboard.controller"
import {createTopicmodal} from "./ui-component/topic-modal/topic-modal.controller"

import {topicCltrl} from "./ui-component/topics/topic-controller"

createHeader()
createMenu()
createMainContainer()
export const updateViewState = (viewName) => {
  switch (viewName) {
  case "Login":
    // createUserLogin()
    break
  case "Dashboard":

    createPopularTopicSection()
    createFavoriteTopicSection()
    createChallengesSection()
    createMyChallengesSection()
    createTopicmodal()
    break

  case "Topic":
    topicCltrl()
    createTopicmodal()
    break
  default:
    break
  }
}

// init
updateViewState("Topic")

