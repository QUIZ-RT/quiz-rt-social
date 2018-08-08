import {createChallengeContainer, createQuestion, createChallengeHeader, createChallengeSideBarView} from "../view/CreateChallengeView"
import {storeChallenge,updateUserTransaction} from "../service/CreateChallengeService"
import {Store} from '../../../../boot/Store';
import {createShareChallengesSection} from "../../ShareChallenges/controller/shareChallenges.controller"
import {getUserFromUserMaster} from "../../ShareChallenges/service/shareChallenges.service"

let count = 0

let challenge ={"challengeId": "", "topicName": "", "challengeName": "", "questions": [],"Created_By":""}
let userEmail ="";
Store.subscribe(() => {
  const currentState = Store.getState()
  if(currentState.menuReducer.currentView === 'challenges'){
   
            document.querySelector('#quiz-maincontent').innerHTML = "";
            createChallengeSideBarView();
            const shareChallengeCall = document.getElementById("shareChallenge");
            var userId;
            shareChallengeCall.onclick = function() {
              const email = currentState.menuReducer.currentUserInfo.email;       
              //console.log("myEmail: " + email)         
              getUserFromUserMaster(email).then(function(currentUser) {
                userId = currentUser.userID
                //console.log("This is userid:" + userId)
                createShareChallengesSection(userId)
              })
              
            }
            createChallengeContainer();
        }
  if(currentState.challengeReducer.currentView === 'createChallenge'){
    document.querySelector('#challengeSection').innerHTML = "";
    createChallengeHeader();
  }
  if (currentState.menuReducer.currentUserInfo) {
      userEmail =  currentState.menuReducer.currentUserInfo.email ; 
      
      console.log("userEmail is :",userEmail);
  }
})


// Store.subscribe(() => {
//   const currentState = Store.getState()
//   if(currentState.challengeReducer.currentView === 'createChallenge'){
//     document.querySelector('#quiz-maincontent').innerHTML = "";
//     createChallengeSideBarView();
//     createChallengeContainer()
//     createChallengeHeader()
//   }
// })

// function createChallengeSideBar() {
//   createChallengeSideBarView()
// }

// function createChallenge() {
//   createChallengeContainer()
//   createChallengeHeader()
// }

function createNextQuestion(evnt) {
  evnt.preventDefault()
  if (document.getElementById("challengeName") != null) {
    challenge.challengeName = document.getElementById("challengeName").value
    document.getElementById("ChallengeNameErr").setAttribute("style","display:none");
  }
  if (document.getElementById("topic") != null) {
    challenge.topicName = document.getElementById("topic").value
      document.getElementById("topicErr").setAttribute("style","display:none");
  
  }
  if(challenge.topicName ===""){
     document.getElementById("topicErr").removeAttribute("style");
  }
  else if(challenge.challengeName ===""){
     document.getElementById("ChallengeNameErr").removeAttribute("style");
  }else{
    let result = validateRequiredFields();
    if(result ==="true"){
      console.log(`current challenge Name: ${challenge.challengeName} and topic name is ${challenge.topicName}`)
      count = count + 1
      if (count > 1) {
        const currentQuesCount = count - 1
        const ques = document.getElementById(`ques${currentQuesCount}`).value
        const quesopt1 = document.getElementById(`ques${currentQuesCount}opt1`).value
        const quesopt2 = document.getElementById(`ques${currentQuesCount}opt2`).value
        const quesopt3 = document.getElementById(`ques${currentQuesCount}opt3`).value
        const quesopt4 = document.getElementById(`ques${currentQuesCount}opt4`).value
        const quesans = document.getElementById(`ques${currentQuesCount}ans`).value
        const questionObj = `{"qid":"${currentQuesCount}","question": "${ques}","options":[{"optionA": "${quesopt1}"},{"optionB": "${quesopt2}"},{"optionC": "${quesopt3}"},{"optionD": "${quesopt4}"}],"answer": "${quesans}"}`
        challenge.questions.splice(currentQuesCount-1,1,questionObj);
        console.log(`current challenge obj: challengeName:${challenge.challengeName} , topic name : ${challenge.topicName} , questions are  ${challenge.questions}`)
      }
      createQuestion(challenge, count);
      if(challenge.questions.length>=count){

        let currentQuesArr = JSON.parse(challenge.questions[count-1]);
        document.getElementById(`ques${count}`).value = currentQuesArr.question;
        document.getElementById(`ques${count}opt1`).value = currentQuesArr.options[0].optionA;
        document.getElementById(`ques${count}opt2`).value = currentQuesArr.options[1].optionB;
        document.getElementById(`ques${count}opt3`).value = currentQuesArr.options[2].optionC;
        document.getElementById(`ques${count}opt4`).value = currentQuesArr.options[3].optionD;
        document.getElementById(`ques${count}ans`).value = currentQuesArr.answer;
      }
    }
  }
  
}
function validateRequiredFields(){
      let validatecount = count + 1
      let result ="";
      if (validatecount > 1) {
      document.getElementById("questionErr").setAttribute("style","display:none");
      document.getElementById("option1Err").setAttribute("style","display:none");
      document.getElementById("option2Err").setAttribute("style","display:none");
      document.getElementById("option3Err").setAttribute("style","display:none");
      document.getElementById("option4Err").setAttribute("style","display:none");
      document.getElementById("answerErr").setAttribute("style","display:none");
        const ques = document.getElementById(`ques${count}`).value
        result ="true";
        if(ques ===""){
        document.getElementById("questionErr").removeAttribute("style");
        result ="false";
        }
        const quesopt1 = document.getElementById(`ques${count}opt1`).value
         if(quesopt1 ===""){
           document.getElementById("option1Err").removeAttribute("style");
           result ="false";
        }
        const quesopt2 = document.getElementById(`ques${count}opt2`).value
         if(quesopt2 ===""){
           document.getElementById("option2Err").removeAttribute("style");
            result ="false";
        }
        const quesopt3 = document.getElementById(`ques${count}opt3`).value
         if(quesopt3 ===""){
          document.getElementById("option3Err").removeAttribute("style");
           result ="false";
        }
        const quesopt4 = document.getElementById(`ques${count}opt4`).value
         if(quesopt4 ===""){
           document.getElementById("option4Err").removeAttribute("style");
            result ="false";
        }
        const quesans = document.getElementById(`ques${count}ans`).value
         if(quesans ===""){
           document.getElementById("answerErr").removeAttribute("style");
            result ="false";
        }
      
      }else{
        return "true";
      }
      return result;
}
function goToPrevQuestion(evnt){
  evnt.preventDefault();
    console.log("count is " + count);
    const currArrIndex = count - 2;
     const currentQuesCount = count - 1;
     let currentQuesArr = JSON.parse(challenge.questions[currArrIndex]);
    console.log("prevous ques",currentQuesArr);
    count =count -1;
    createQuestion(challenge, count);
    document.getElementById(`ques${currentQuesCount}`).value = currentQuesArr.question;
    document.getElementById(`ques${currentQuesCount}opt1`).value = currentQuesArr.options[0].optionA;
    document.getElementById(`ques${currentQuesCount}opt2`).value = currentQuesArr.options[1].optionB;
    document.getElementById(`ques${currentQuesCount}opt3`).value = currentQuesArr.options[2].optionC;
    document.getElementById(`ques${currentQuesCount}opt4`).value = currentQuesArr.options[3].optionD;
    document.getElementById(`ques${currentQuesCount}ans`).value = currentQuesArr.answer;
}
function saveChallengeDetails(evnt) {
  evnt.preventDefault()
  console.log("count is " + count)
  const ques = document.getElementById(`ques${count}`).value
  const quesopt1 = document.getElementById(`ques${count}opt1`).value
  const quesopt2 = document.getElementById(`ques${count}opt2`).value
  const quesopt3 = document.getElementById(`ques${count}opt3`).value
  const quesopt4 = document.getElementById(`ques${count}opt4`).value
  const quesans = document.getElementById(`ques${count}ans`).value
  const questionObj = `{"qid":"${count}","question": "${ques}","options":[{"optionA": "${quesopt1}"},{"optionB": "${quesopt2}"},{"optionC":"${quesopt3}"},{"optionD": "${quesopt4}"}],"answer": "${quesans}"}`
  challenge.questions.push(questionObj)
  console.log(`final challenge obj: challengeName:${challenge.challengeName} , topic name : ${challenge.topicName} and questions are  ${challenge.questions}`)
  challenge.Created_By = userEmail;
  storeChallenge(challenge);
  const formSection = document.getElementById("challengeSection")
  formSection.innerHTML = "";
  count = 0
  challenge ={"challengeId": "", "topicName": "", "challengeName": "", "questions": [],"Created_By":""}

}

// Store.subscribe(()=>{
//   let currentState = Store.getState();
//   if(currentState.createchallengeReducer.)
// })
export {createNextQuestion, saveChallengeDetails,goToPrevQuestion}
