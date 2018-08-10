import "./styles/scss/main.scss"
import {} from "../../node_modules/material-design-lite/material.min"
import {createLoader} from "./ui-component/loader/loader.controller"
import {createSnackBar} from "./ui-component/snackbar/snackbar.controller"
import {createNextQuestion, saveChallengeDetails, goToPrevQuestion} from "./ui-component/challenge/CreateChallenge/controller/CreateChallengeController"
import {callCreateChallenge, callShareChallenge} from "../client/ui-component/challenge/CreateChallenge/view/CreateChallengeView"

import "./ui-component/Friends/controller"
import "./ui-component/Friends/reducer"
import "./ui-component/Friends/service"
import "./ui-component/Friends/view"
import {app} from "firebase"
var Material = require("exports-loader?componentHandler&MaterialRipple!material-design-lite/material.js")

createLoader()
createSnackBar()

$("body").on("click", "#create", createNextQuestion)
$("body").on("click", "#prevQuestion", goToPrevQuestion)
$("body").on("click", "#nextQuestion", createNextQuestion)
$("body").on("click", "#save", saveChallengeDetails)
$("#quiz-maincontent").on("click", "#createChallenge", callCreateChallenge)
$("#quiz-maincontent").on("click", "#shareChallenge", callShareChallenge)

module.exports = app

