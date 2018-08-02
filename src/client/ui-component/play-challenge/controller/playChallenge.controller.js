import CreatePlayChallengeView from "../view/playChallenge.view"
// import CreateChallengeService from '../service/CreateChallengeService';

export default class CreatePlayChallengeController {
  static displayPlaySideBar() {
    CreatePlayChallengeView.createSidebar()
  }

  static saveChallengeDetails(evnt) {
    evnt.preventDefault()

    const challengeId = document.getElementById("challengeID").value
    const ques1 = document.getElementById("ques1").value
    const ques1opt1 = document.getElementById("ques1opt1").value
    const ques1opt2 = document.getElementById("ques1opt2").value
    const ques1opt3 = document.getElementById("ques1opt3").value
    const ques1opt4 = document.getElementById("ques1opt4").value

    const playChallengeJsonObj = `{

"challengeId": ${challengeId},
"questions":[{
              "question": ${ques1},
              "options":[
                          "optionA": ${ques1opt1},
                          "optionB": ${ques1opt2},
                          "optionC" ${ques1opt3},
                          "optionD": ${ques1opt4}
                        ],
                
              }
            ]
    }`
    console.log(`playChallengeJsonObj is:${playChallengeJsonObj}`)
    // CreateChallengeService.storeChallenge(challengeJsonObj);
  }
}
