import {MDCDialog} from "@material/dialog"
import {renderViewToContainer, getTopicModalbox, getToipcModalBodyContent} from "./topic-modal.view"
import {quizStore} from "../../store/quiz-store"

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
  dialog.lastFocusedTarget = target
  dialog.show()
}
