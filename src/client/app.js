import "jquery"
import "./styles/scss/main.scss"
import {} from "../../node_modules/material-design-lite/material.min"
import {createNextQuestion,createChallenge,saveChallengeDetails,createChallengeSideBar} from "./ui-component/challenge/controller/CreateChallengeController"
import {createHeader} from "./ui-component/header/header.controller"
import {createMenu} from "./ui-component/menu/menu.controller"
import {createMainContainer} from "./ui-component/main/main.controlller"
import {createPopularTopicSection} from "./ui-component/dashboard/dashboard.controller"

$("body").on("click", "#create", createNextQuestion);
$("body").on("click", "#nextQuestion",createNextQuestion);
$("body").on("click", "#save", saveChallengeDetails);
$("body").on("click", "#createChallenge", createChallenge);
createHeader()
createMenu()
createMainContainer()
createChallengeSideBar();

//createPopularTopicSection()


