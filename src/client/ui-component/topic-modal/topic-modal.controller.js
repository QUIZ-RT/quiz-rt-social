import {MDCDialog} from "@material/dialog"
import {renderViewToContainer, getTopicModalbox, getToipcModalBodyContent} from "./topic-modal.view"
import {Store} from "../../boot/Store"

export const createTopicmodal = () => {
  const topicModaltemplate = getTopicModalbox()
  renderViewToContainer(topicModaltemplate, "main")
}
export const topicModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  const state = Store.getState().topicReducer.topics["" + targetId]
  openTopicModal(state, targetId, evt.target)
  evt.preventDefault()
}

const openTopicModal = (state, id, target) => {
  const dialogElement = document.querySelector("#topic-mdc-dialog")
  const dialog = new MDCDialog(dialogElement)
  const dialogHeader = dialogElement.querySelector("#topic-mdc-dialog-label")
  dialogHeader.innerHTML = `Topic : ${state.topicText}`
  render(state, id)
  dialog.listen("MDCDialog:cancel", function() {
    console.log("canceled")
  })
  dialog.lastFocusedTarget = target
  dialog.show()
}

const render = (state, id) => {
  const dialogBody = document.querySelector("#topic-mdc-dialog-description")
  const topicModalBodyTemp = getToipcModalBodyContent(state, id)
  const modalBtnList = topicModalBodyTemp.querySelectorAll("button")
  modalBtnList.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalbtnClick(event)
    })
  })
  dialogBody.innerHTML = ""
  dialogBody.appendChild(topicModalBodyTemp)
}

const topicModalbtnClick = (event) => {
  const btnData = event.target.id.split("-")
  const topicId = btnData[1]
  const state = Store.getState().topicReducer.topics
  let topic = ""
  switch (btnData[2]) {
  case "play":
    console.log("play" + topicId)
    break
  case "leader":
    console.log("leader" + topicId)
    break
  case "unfollow":
    topic = state["" + topicId]
    topic.follow = !topic.follow
    render(topic, topicId)
    break
  case "follow":
    topic = state["" + topicId]
    topic.follow = !topic.follow
    render(topic, topicId)
    break
  }
}
