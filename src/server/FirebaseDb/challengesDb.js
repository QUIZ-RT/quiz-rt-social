import firebase from "firebase"
import {config} from "../config"

export const challaneDB = (req, resp) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
 const challenges = firebase.database().ref("Challenges");
 let nextChallengSeq =0;
 challenges.once("value", function(challengesNode) {
    nextChallengSeq = Math.max.apply(Math,(Object.keys(challengesNode.val())));
    nextChallengSeq = +nextChallengSeq+1;
    challenges.child(`${nextChallengSeq}`).set(req.body);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  return "success";
}

