import {createChallengeContainer,createQuestion,createChallengeHeader,createChallengeSideBarView} from "../view/CreateChallengeView"
import {storeChallenge} from "../service/CreateChallengeService"

let count=0;
let challenge =
            {"challengeId":"",
            "topicName": "",
            "challengeName": "",
            "questions":[]
          }
function createChallengeSideBar(){
      createChallengeSideBarView();
}
  function  createChallenge() {
    createChallengeContainer();
    createChallengeHeader(); 
   
  }

   function createNextQuestion(evnt){
    evnt.preventDefault();
    if(document.getElementById("challengeName") !=null){
      challenge.challengeName = document.getElementById("challengeName").value ;
    }
    if( document.getElementById("topic") !=null){
      challenge.topicName =  document.getElementById("topic").value;
    }
   
    console.log(`current challenge Name: ${challenge.challengeName } and topic name is ${challenge.topicName}`);
    count = count+1;
    if(count>1){
      let currentQuesCount =count-1;
      const ques1 = document.getElementById(`ques${currentQuesCount}`).value;
      const ques1opt1 = document.getElementById(`ques${currentQuesCount}opt1`).value;
      const ques1opt2 = document.getElementById(`ques${currentQuesCount}opt2`).value;
      const ques1opt3 = document.getElementById(`ques${currentQuesCount}opt3`).value;
      const ques1opt4 = document.getElementById(`ques${currentQuesCount}opt4`).value;
      const ques1ans = document.getElementById(`ques${currentQuesCount}ans`).value;
      let questionObj =`{
          "question": ${ques1},
          "options":[
                      "optionA": ${ques1opt1},
                      "optionB": ${ques1opt2},
                      "optionC" ${ques1opt3},
                      "optionD": ${ques1opt4}
                    ],
            "answer": ${ques1ans}
          }`;
        challenge.questions.push(questionObj);
        console.log(`current challenge obj: challengeName:${challenge.challengeName} , topic name : ${challenge.topicName} , questions are  ${challenge.questions}`);
        }
    createQuestion(challenge,count);
    
    }

   function saveChallengeDetails(evnt) {
      evnt.preventDefault();
      console.log("count is "+count)
      const ques1 = document.getElementById(`ques${count}`).value;
      const ques1opt1 = document.getElementById(`ques${count}opt1`).value;
      const ques1opt2 = document.getElementById(`ques${count}opt2`).value;
      const ques1opt3 = document.getElementById(`ques${count}opt3`).value;
      const ques1opt4 = document.getElementById(`ques${count}opt4`).value;
      const ques1ans = document.getElementById(`ques${count}ans`).value;
      let questionObj =`{
          "question": ${ques1},
          "options":[
                      "optionA": ${ques1opt1},
                      "optionB": ${ques1opt2},
                      "optionC" ${ques1opt3},
                      "optionD": ${ques1opt4}
                    ],
            "answer": ${ques1ans}
          }`;
        challenge.questions.push(questionObj);
        console.log(`final challenge obj: challengeName:${challenge.challengeName} , topic name : ${challenge.topicName} , questions are  ${challenge.questions}`);
        
     // storeChallenge(challenge);
     const formSection = document.getElementById("challengeSection");
     formSection.innerHTML="";
  }
  export { createChallenge,createNextQuestion,saveChallengeDetails,createChallengeSideBar};
