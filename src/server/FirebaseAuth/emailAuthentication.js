import {config} from "../config"
import firebase from "firebase"
import {updateViewState} from "../../client/app"
import {Store} from "../../client/boot/Store"
import {showSnackBar} from "../../client/ui-component/snackbar/snackbar.controller"
const firebaseAp = firebase.initializeApp(config)
export const signIn = (email, password) => {
  const auth = firebaseAp.auth()
  const promise = auth.signInWithEmailAndPassword(email, password)
  promise.catch(e => showSnackBar("This user has not registered.", "Error"))
}

export const signUp = (email, password) => {
  const auth = firebaseAp.auth()
  const promise = auth.createUserWithEmailAndPassword(email, password)
  promise.catch(e => console.log(e.message))
}

export const logout = () => {
  firebaseAp.auth().signOut()
  // console.log("I SIGNNED OUT SUCCESSFULLY")
}

// Adding a real time listener for user authentication
firebaseAp.auth().onAuthStateChanged(firebaseUser => {
  if (firebaseUser) {
    // console.log("i am LOGIN MY OBJECT IS = ", firebaseUser)
    //cleanBody()
    //updateViewState("dashboard")
    Store.dispatch({type: "LoggedInUserInfo", dataItem: {UserInfo :firebaseUser, Name: 'dashboard'}})
    
  }
  else {
    // console.log("NOT LOGGED IN")
    //cleanBody()
    // updateViewState("login")
    Store.dispatch({type: "CurrentViewUpdate", dataItem: {Name: 'login'}})
  }
})

function cleanBody() {
  const bodyElement = document.querySelector("body")
  while (bodyElement.hasChildNodes()) {
    bodyElement.removeChild(bodyElement.childNodes[0])
  }
}
