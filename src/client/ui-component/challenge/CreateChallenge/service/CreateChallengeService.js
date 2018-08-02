import {firebase} from "firebase"

const config = {
  apiKey: "AIzaSyCmo8KDSPyTWauu7z5dFhGUUi_cuTi-XF8",
  authDomain: "quizapp-social.firebaseapp.com",
  databaseURL: "https://quizapp-social.firebaseio.com",
  projectId: "quizapp-social",
  storageBucket: "quizapp-social.appspot.com",
  messagingSenderId: "367717626621",
}

function storeChallenge(challengeJsonObj) {
  // Get a reference to the database service
  firebase.initializeApp(config)
  const database = firebase.database()
  database.ref("users/sushil").set(challengeJsonObj)
  console.log("Change has been created")
}
export {storeChallenge}

