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

import {createUserLogin} from "./ui-component/login-page/login.controller"
import {createTopics} from "./ui-component/topics/topic-controller"

//Login Page

createUserLogin()
CreatePlayChallengeController.displayPlaySideBar();


// createChallengeSideBar()
$("body").on("click", "#create", createNextQuestion)
$("body").on("click", "#nextQuestion", createNextQuestion)
$("body").on("click", "#save", saveChallengeDetails)
// $("body").on("click", "#createChallenge", createChallenge)
// $("body").on("click", "#playChallenge", CreatePlayChallengeController.displayPlaySideBar)
// createShareChallengesSection()
// ShareChallengesWithSelectedFriendsSection()



