import {MDCDialog} from "@material/dialog"
import {MDCSelect} from "@material/select/index"
import {renderViewToContainer, getTopicModalbox, getToipcModalBodyContent} from "./topic-modal.view"
import {Store} from "../../boot/Store"
import {getChallengeDetails} from "./../leader-board/leader-board-service"
import {getFilteredDetails} from "./../leader-board/leader-controller"

export const createTopicmodal = () => {
  const topicModaltemplate = getTopicModalbox()
  renderViewToContainer(topicModaltemplate, "main")
}
export const topicModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  console.log(targetId)
  const state = Store.getState().topicReducer.topics["" + targetId]
  openTopicModal(state, targetId, evt.target)
  evt.preventDefault()
}

const openTopicModal = (state, id, target) => {
  const dialogElement = document.querySelector("#topic-mdc-dialog")
  const dialog = new MDCDialog(dialogElement)
  const dialogHeader = dialogElement.querySelector("#topic-mdc-dialog-label")
  const dialogBody = dialogElement.querySelector("#topic-mdc-dialog-description")
  dialogHeader.innerHTML = `Topic : ${state.topicText}`
  dialogBody.innerHTML = ""
  const topicModalBodyTemp = getToipcModalBodyContent(state, id)
  const modalBtnList = topicModalBodyTemp.querySelectorAll("button")
  modalBtnList.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalbtnClick(event)
    })
  })
  dialogBody.appendChild(topicModalBodyTemp)

  dialog.listen("MDCDialog:cancel", function() {
    console.log("canceled")
  })

  // ///////////////////////// Leader Board Related Code///////////////////////////////
  document.querySelector(".btnLeaderBoard").addEventListener("click", function(event) {
    const result = JSON.parse(getChallengeDetails())
    getFilteredDetails(result.gameStatus, 1)

    const dialogElement1 = document.querySelector("#topic-mdc-dialog")
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

const topicModalbtnClick = (event) => {
  const btnData = event.target.id.split("-")
  const topicId = btnData[1]
  switch (btnData[2]) {
  case "play":
    console.log("play" + topicId)
    break
  case "leader":
    console.log("leader" + topicId)
    break
  case "unfollow":
    console.log("unfollow" + topicId)
    break
  case "follow":
    console.log("follow" + topicId)
    break
  }
}
