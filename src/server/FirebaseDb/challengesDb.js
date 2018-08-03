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
    let requestBody = req.body;
    requestBody.challengeId = nextChallengSeq ;
    console.log("final request body ",requestBody);
    challenges.child(`${nextChallengSeq}`).set(requestBody);
  }, function (errorObject) {
    console.log("The read failed: " + errorObject.code);
  });

  return "success";
}

