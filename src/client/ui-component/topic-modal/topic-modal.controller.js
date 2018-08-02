import {MDCDialog} from "@material/dialog"
import {MDCSelect} from "@material/select/index"
import {renderViewToContainer, getTopicModalbox, getToipcModalBodyContent} from "./topic-modal.view"
import {quizStore} from "../../store/quiz-store"

import {getChallengeDetails} from "./../leader-board/leader-board-service"
import {getFilteredDetails} from "./../leader-board/leader-controller"

export const createTopicmodal = () => {
  const topicModaltemplate = getTopicModalbox()
  renderViewToContainer(topicModaltemplate, "main")
}
export const topicModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  console.log(targetId)
  const state = quizStore.getState().topicReducer.topics["" + targetId]
  openTopicModal(state, targetId, evt.target)
  evt.preventDefault()
}

const openTopicModal = (state, id, target) => {
  console.log("state - ", state, id, target)
  const dialogElement = document.querySelector("#topic-mdc-dialog")
  const dialog = new MDCDialog(dialogElement)
  const dialogHeader = dialogElement.querySelector("#topic-mdc-dialog-label")
  const dialogBody = dialogElement.querySelector("#topic-mdc-dialog-description")
  // const dialogFooter = dialogElement.querySelector(".mdc-dialog__footer")
  dialogHeader.innerHTML = `Topic : ${state.topicText}`
  dialogBody.innerHTML = ""
  dialogBody.appendChild(getToipcModalBodyContent(state, id))
  //   .dialog.listen("MDCDialog:accept", function() {
  //     console.log("accepted")
  //   })

  // dialog.listen("MDCDialog:cancel", function() {
  //   console.log("canceled")
  // })

  // ///////////////////////// Leader Board Related Code///////////////////////////////
  document.querySelector("#btnLeaderBoard").addEventListener("click", function(event) {
    const result = JSON.parse(getChallengeDetails())
    getFilteredDetails(result.gameStatus, 1)

    const dialogElement1 = document.querySelector("#topic-mdc-dialog")
    const dialog1 = new MDCDialog(dialogElement1)
    dialog1.close()

    const dialogElement2 = document.querySelector("#leaderBrd-mdc-dialog")
    const dialog2 = new MDCDialog(dialogElement2)
    dialog2.show()

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
