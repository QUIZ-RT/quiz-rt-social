import {MDCDialog} from "@material/dialog"
import {MDCSelect} from "@material/select/index"
import {renderViewToContainer, getChallengeModalbox, getToipcModalBodyContent} from "./challenge-modal.view"
// import {Store} from "../../boot/Store"

const challengeDataList = [
    {
        "challengeId":"01",
        "topicName": sport,
        "challengeName": ch1,
        "questions":[
            {"qId":'1',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'2',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'3',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'4',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'5',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'6',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'7',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                }
        ]
    },
    {
        "challengeId":"06",
        "topicName": sport,
        "challengeName": ch1,
        "questions":[
            {"qId":'1',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'2',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'3',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'4',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'5',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'6',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'7',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                }
        ]
    },
    {
        "challengeId":"02",
        "topicName": sport,
        "challengeName": ch1,
        "questions":[
            {"qId":'1',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'2',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'3',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'4',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'5',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'6',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'7',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                }
        ]
    },
    {
        "challengeId":"03",
        "topicName": sport,
        "challengeName": ch1,
        "questions":[
            {"qId":'1',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'2',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'3',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'4',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'5',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'6',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'7',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                }
        ]
    },
    {
        "challengeId":"04",
        "topicName": sport,
        "challengeName": ch1,
        "questions":[
            {"qId":'1',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'2',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'3',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'4',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'5',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'6',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                },
                {"qId":'7',
                "question": "where are you from ?",
                "options":{
                        "optionA" : "Bangalore",
                        "optionB" : "Delhi",
                        "optionC" : "Kolkata",
                        "optionD" : "Mumbai",
                },
            "answer": "Bangalore"
                }
        ]
    }
]


export const createChallengemodal = () => {
  const challengeModaltemplate = getChallengeModalbox()
  renderViewToContainer(challengeModaltemplate, "#quiz-maincontent")
}
export const challengeModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  console.log(targetId)
  const state = challengeDataList[targetId]
  openChallengeModal(state, targetId, evt.target)
  evt.preventDefault()
}

const openChallengeModal = (state, id, target) => {
  const dialogElement = document.querySelector("#challenge-mdc-dialog")
  const dialog = new MDCDialog(dialogElement)
  const dialogHeader = dialogElement.querySelector("#challenge-mdc-dialog-label")
  const dialogBody = dialogElement.querySelector("#challenge-mdc-dialog-description")
  dialogHeader.innerHTML = `Challenge : ${state.challengeText}`
  dialogBody.innerHTML = ""
  const challengeModalBodyTemp = getTopicModalBodyContent(state, id)
  const modalBtnList = challengeModalBodyTemp.querySelectorAll("button")
  modalBtnList.forEach((item) => {
    item.addEventListener("click", (event) => {
      challengeModalbtnClick(event)
    })
  })
  dialogBody.appendChild(challengeModalBodyTemp)

  dialog.listen("MDCDialog:cancel", function() {
    console.log("canceled")
  })

  // ///////////////////////// Leader Board Related Code///////////////////////////////
  document.querySelector(".btnLeaderBoard").addEventListener("click", function(event) {
    const result = JSON.parse(getChallengeDetails())
    getFilteredDetails(result.gameStatus, 1)

    const dialogElement1 = document.querySelector("#challenge-mdc-dialog")
    const dialog1 = new MDCDialog(dialogElement1)
    dialog1.close()

    const dialogElement2 = document.querySelector("#leaderBrd-mdc-dialog")
    const dialog2 = new MDCDialog(dialogElement2)
    dialog2.show()

    dialog2.listen("MDCDialog:cancel", function() {
      document.getElementById("leaderBody").innerHTML = ""
      const select2 = new MDCSelect(document.querySelector(".mdc-select"))
      select2.value = "1"
    })
    const select = new MDCSelect(document.querySelector(".mdc-select"))
    select.listen("change", () => {
      const result = JSON.parse(getChallengeDetails())
      getFilteredDetails(result.gameStatus, select.value)
    })
  })
  // ////////////////////////////////////////////////////////////////////////////////////

  dialog.lastFocusedTarget = target
  dialog.show()
}

// const challengeModalbtnClick = (event) => {
//   const btnData = event.target.id.split("-")
//   const challengeId = btnData[1]
//   switch (btnData[2]) {
//   case "play":
//     console.log("play" + challengeId)
//     break
//   case "leader":
//     console.log("leader" + challengeId)
//     break
//   case "unfollow":
//     console.log("unfollow" + challengeId)
//     break
//   case "follow":
//     console.log("follow" + challengeId)
//     break
//   }
// }
