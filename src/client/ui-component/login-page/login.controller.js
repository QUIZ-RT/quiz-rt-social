import {getUserTemplate, renderViewToContainer} from "./login.view"
import {goToSignin, goToSignup} from "./login.service"
export const createUserLogin = () => {
  const userContent = getUserTemplate()
  const signInBtn = userContent.querySelector("#signin")
  const signUpBtn = userContent.querySelector("#signup")
  signInBtn.addEventListener("click", (event) => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    goToSignin(username.value, password.value)
  })
  signUpBtn.addEventListener("click", (event) => {
    const username = document.getElementById("username")
    const password = document.getElementById("password")
    goToSignup(username.value, password.value)
  })
  renderViewToContainer(userContent, "body")
}

import firebase from "firebase"
import {config} from "../../../server/config"

export const GoogleLogin = () => {
  firebase.initializeApp(config)

  var provider = firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider).then(function(result) {
    console.log("result", result)
  })
}
