import firebase from "firebase"
import {config} from "../config"

export const addChallengeToDB = (req, resp) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
 const challenges = firebase.database().ref("Challenges");
 let nextChallengSeq =0;
 const promise = new Promise(function(resolve, reject) {
       challenges.once("value", function(challengesNode) {
          nextChallengSeq = Math.max.apply(Math,(Object.keys(challengesNode.val())));
          nextChallengSeq = +nextChallengSeq+1;
          let requestBody = req.body;
          requestBody.challengeId = nextChallengSeq ;
          challenges.child(`${nextChallengSeq}`).set(requestBody);
          
          //Get Updated challenge record
          const lastChallenge = firebase.database().ref(`Challenges/${nextChallengSeq}`);
        lastChallenge.once("value", function(lastchallengesNode) {
        let lastchallenges = lastchallengesNode.val();
          console.log("nextChallengSeq key"+nextChallengSeq + "lastchallenges :"+lastchallenges);
          resolve(lastchallenges);
         });


        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
    },
     function (errorObject) {
          reject(errorObject);
        });
  return promise;
}

export const updateUserTransaction = (req, resp) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
    console.log("inside updateUserTransaction");
 const challenges = firebase.database().ref("User_Transaction");
 let userTranKey ="";
 const promise = new Promise(function(resolve, reject) {
       challenges.once("value", function(userTranNode) {
          let requestBody = req.body;
          userTranKey = requestBody.Created_By.replace( /[^a-zA-Z0-9-. ]/g,"").replace(/[.]/g,"");
          console.log("userTranKey : ",userTranKey)
          challenges.child(`${userTranKey}`).set(requestBody);
        
          resolve(requestBody);
         });

        }, function (errorObject) {
          console.log("The read failed: " + errorObject.code);
        });
  return promise;
}

export const getAllChallengesFromDB = (req, resp) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
 const challengesRef = firebase.database().ref();
 const promise = new Promise(function(resolve, reject) {
    challengesRef.child("Challenges").once("value", function(challengesNode) {
        resolve(challengesNode.val());
  }, function (errorObject) {
         reject(errorObject);
         
  });
});
  return promise;
}

export const getUserDetail = (req, resp) => {
    if (!firebase.apps.length) {
        firebase.initializeApp(config);
    }
 const userTranRef = firebase.database().ref();
 const promise = new Promise(function(resolve, reject) {
    userTranRef.child("User_Master").once("value", function(userTranNode) {
        resolve(userTranNode.val());
  }, function (errorObject) {
         reject(errorObject);
         
  });
});
  return promise;
}
