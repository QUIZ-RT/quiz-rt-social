
import firebase from "firebase"
import {config} from "../../../server/config"

export const GoogleLogin = () => {
  firebase.initializeApp(config)

  var provider = firebase.auth.GoogleAuthProvider()
    firebase.auth().signInWithRedirect(provider).then(function(result) {
    console.log("result", result)
  })
}
