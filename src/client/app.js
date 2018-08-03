// import "./boot/Store"
// import "./boot/reducer"
//import $ from "jquery"
import {Store} from "./boot/Store"
import "./boot/subscribe"
import "./styles/scss/main.scss"
import {} from "../../node_modules/material-design-lite/material.min"

// import CreateChallengeController from "./ui-component/challenge/controller/CreateChallengeController"
import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection, createFavoriteTopicSection, createChallengesSection, createMyChallengesSection} from "./ui-component/dashboard/dashboard.controller"
import {createTopicmodal} from "./ui-component/topic-modal/topic-modal.controller"
import CreatePlayChallengeController from "./ui-component/challenge/play-challenge/controller/playChallenge.controller"
import {createNextQuestion, createChallenge, saveChallengeDetails, createChallengeSideBar} from "./ui-component/challenge/CreateChallenge/controller/CreateChallengeController"
import {createShareChallengesSection, ShareChallengesWithSelectedFriendsSection} from "./ui-component/challenge/ShareChallenges/controller/shareChallenges.controller"

import {topicCltrl} from "./ui-component/topics/topic-controller"
import {createUserLogin} from "./ui-component/login-page/login.controller"
// import {GoogleLogin} from "./ui-component/login-page/login.controller"
// GoogleLogin()
// createHeader()
// createMenu()
// createMainContainer()
// createPopularTopicSection()
// createFavoriteTopicSection()
// createChallengesSection()
// createMyChallengesSection()
// createTopicmodal()
// topicCltrl()
// createTopicmodal()

// $("#challengeSection").on("click", "#create", CreateChallengeController.saveChallengeDetails)
// CreateChallengeController.displaySideBar()

console.log('Store.....', Store);

export const updateViewState = (viewName) => {
  switch (viewName) {
  case "login":
    clearContainer("body")
    createUserLogin()
    break
  case "dashboard":
    clearContainer("body")
    createHeader()
    createMenu()
    createMainContainer()
    createPopularTopicSection()
    createFavoriteTopicSection()
    createChallengesSection()
    createMyChallengesSection()
    createTopicmodal()
    break
  case "topics":
    clearContainer("main")
    createTopicmodal()
    topicCltrl()
    break
  case "challenges":
    clearContainer("main")
    createChallengeSideBar()
    $("body").on("click", "#create", createNextQuestion)
    $("body").on("click", "#nextQuestion", createNextQuestion)
    $("body").on("click", "#save", saveChallengeDetails)
    $("body").on("click", "#createChallenge", createChallenge)
    $("body").on("click", "#playChallenge", CreatePlayChallengeController.displayPlaySideBar)
    createShareChallengesSection()
    ShareChallengesWithSelectedFriendsSection()
    break
  case "friends":
    clearContainer("main")
    break
  default:
    break
  }
}
const clearContainer = (containerKey) => {
  document.querySelector(containerKey).innerHTML = ""
}

// createChallengeSideBar()
// // // init
//updateViewState("dashboard")

// // share Challenges section
// createShareChallengesSection()
// ShareChallengesWithSelectedFriendsSection()
