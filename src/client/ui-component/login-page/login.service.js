import {signIn, signUp, logout} from "../../../server/FirebaseAuth/emailAuthentication"
import {showSnackBar} from "../snackbar/snackbar.controller"
import {config} from "../../../server/config"
import firebase from "firebase"
import {Store} from "../../boot/Store"
export const goToSignin = () => {
  function newLogin(user) {
    if(user) {
      Store.dispatch({type: "LoggedInUserInfo", dataItem: {UserInfo :user, Name: 'dashboard'}})
      app(user)
    }
    else {
      Store.dispatch({type: "CurrentViewUpdate", dataItem: {Name: 'login'}})
      var provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider).then(function(user) {
        console.log("result", user)
      }
      )
    }
  }
  firebase.auth().onAuthStateChanged(newLogin);
}
function app(user) {
  console.log("user display name:", user.displayName)
  let nextUserID = 0
  let lastUserId = 0
  var UserMaster = firebase.database().ref('User_Master');
  UserMaster.orderByChild('userID').limitToLast(1)
    .on("child_added", function(snapshot) {
      lastUserId = snapshot.val().userID
    })
  UserMaster.once("value", function(userNode) {
    let NodeName = user.email
    NodeName = NodeName.replace(/[^a-zA-Z0-9-. ]/g, "").replace(/[.]/g, "")
    nextUserID = lastUserId + 1
    var myUser = {}
    myUser.userID = nextUserID
    myUser.email = user.email
    myUser.displayName = user.displayName
    myUser.Photo = user.photoURL
    UserMaster.child(NodeName).set(myUser)    
  }, function(errorObject) {
    console.log("The read failed: " + errorObject.code);
  })
}

export const goToLogout = () => {
  firebase.auth().signOut().then(function() {
    console.log("successfully signed out")
  }).catch(function(error) {
  // An error happened.
})
}
