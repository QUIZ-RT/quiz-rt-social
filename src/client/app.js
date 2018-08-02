import $ from "jquery"
import "./styles/scss/main.scss"
import {} from "../../node_modules/material-design-lite/material.min"
import CreateChallengeController from "./ui-component/challenge/controller/CreateChallengeController"
import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection, createFavoriteTopicSection, createChallengesSection, createMyChallengesSection} from "./ui-component/dashboard/dashboard.controller"
import {createTopicmodal} from "./ui-component/topic-modal/topic-modal.controller"
import CreatePlayChallengeController from "./ui-component/play-challenge/controller/playChallenge.controller"
// import {topicCltrl} from "./ui-component/topics/topic-controller"
// import {createUserLogin} from "./ui-component/login-page/login.controller"
// import {GoogleLogin} from "./ui-component/login-page/login.controller"
// GoogleLogin()

createHeader()
createMenu()
createMainContainer()
createPopularTopicSection()
createFavoriteTopicSection()
createChallengesSection()
createMyChallengesSection()
createTopicmodal()
// topicCltrl()
// createTopicmodal()
$("#challengeSection").on("click", "#create", CreateChallengeController.saveChallengeDetails)
CreateChallengeController.displaySideBar()
CreatePlayChallengeController.displayPlaySideBar()

// // init
// updateViewState("Dashboard")
