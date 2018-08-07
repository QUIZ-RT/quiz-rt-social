import {signIn, signUp, logout} from "../../../server/FirebaseAuth/emailAuthentication"
import {showSnackBar} from "../snackbar/snackbar.controller"
import {config} from "../../../server/config"
import firebase from "firebase"
import {Store} from "../../boot/Store"
export const goToSignin = () => {
  function newLogin(user){
    if(user){
      console.log('calling app()')
      Store.dispatch({type: "LoggedInUserInfo", dataItem: {UserInfo :user, Name: 'dashboard'}})
      app(user);
    } else{
      console.log('in else')
      Store.dispatch({type: "CurrentViewUpdate", dataItem: {Name: 'login'}})
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider).then(function(user){
          console.log('result', user);        
        } 
      )
    }
    
  }
  firebase.auth().onAuthStateChanged(newLogin);
}
function app(user){

  console.log('user display name:', user.displayName)
  var UserMaster = firebase.database().ref('User_Master');
  let nextUserID =0;
  UserMaster.once("value", function(userNode) {
    
   let NodeName = user.email;
    NodeName = NodeName.replace( /[^a-zA-Z0-9-. ]/g,"").replace(/[.]/g,"");
    //console.log(NodeName)
    
    nextUserID = Math.random();
    console.log('nextUserID', nextUserID)
    
    // let requestBody = {};
    // requestBody.UserID = nextUserID ;
    var myUser ={};
    myUser.userID = nextUserID
    myUser.email = user.email;
    myUser.displayName = user.displayName;
    myUser.Photo = user.photoURL;
    // requestBody.challengeId = myUser ;
    //console.log('email:', user.email)  
    UserMaster.child(NodeName).set(myUser);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });
  console.log('added data')
}

export const goToLogout = () => {
  firebase.auth().signOut().then(function() {
  // Sign-out successful.
}).catch(function(error) {
  // An error happened.
});
}

//window.onload=goToSignin;

