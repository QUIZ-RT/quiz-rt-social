import "jquery"
import "./styles/scss/main.scss"
import {} from "../../node_modules/material-design-lite/material.min"
// import CreateChallengeController from "./ui-component/challenge/controller/CreateChallengeController"
import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection, createFavoriteTopicSection, createChallengesSection, createMyChallengesSection} from "./ui-component/dashboard/dashboard.controller"
import {createTopicmodal} from "./ui-component/topic-modal/topic-modal.controller"
import {Store} from "./boot/Store"
import "./ui-component/Friends/view"
import "./ui-component/Friends/service"
import "./ui-component/Friends/controller"
import "./ui-component/Friends/reducer"
createHeader()
createMenu()
createMainContainer()
// createPopularTopicSection()
// createFavoriteTopicSection()
// createChallengesSection()
// createMyChallengesSection()
// createTopicmodal()
// $("#challengeSection").on("click", "#create", CreateChallengeController.saveChallengeDetails)
$("#menu_5").on("click", function(event) {
  console.log("menu 5 is clicked")
  Store.dispatch({type: "SHOW_FRIENDS_CHAT"})
})
// CreateChallengeController.displaySideBar()

// export const updateViewState = (viewName) => {
//   switch (viewName) {
//   case "Login":
//     //createUserLogin()
//     break
//   case "Dashboard":
//     createHeader()
//     createMenu()
//     createMainContainer()
//     createPopularTopicSection()
//     break
//   default:
//     break
//   }
// }

// // init
// updateViewState("Dashboard")

