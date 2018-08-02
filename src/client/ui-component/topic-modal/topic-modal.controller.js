import {MDCDialog} from "@material/dialog"
import {renderViewToContainer, getTopicModalbox, getToipcModalBodyContent} from "./topic-modal.view"

// sample Data
const TopicDataList = [
  {
    "id": "1",
    "Name": "Cricket",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "id": "2",
    "Name": "JavaScript",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "id": "3",
    "Name": "Information Tech",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
  {
    "id": "4",
    "Name": "Cricket",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "id": "5",
    "Name": "JavaScript",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "id": "6",
    "Name": "Information Tech",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
  {
    "id": "7",
    "Name": "Cricket",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Cricket",
  },
  {
    "id": "8",
    "Name": "JavaScript",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "JavaScript",
  },
  {
    "id": "9",
    "Name": "Information Tech",
    "Img": "topic002.png",
    "Route": "NavigateToTopic",
    "Title": "Information Tech",
  },
]

export const createTopicmodal = () => {
  const topicModaltemplate = getTopicModalbox()
  renderViewToContainer(topicModaltemplate, "main")
}
export const topicModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  console.log(targetId)
  const topicItem = TopicDataList.filter((x) => {
    return x.id === targetId
  })[0]
  evt.preventDefault()
  const dialogElement = document.querySelector("#topic-mdc-dialog")
  const dialog = new MDCDialog(dialogElement)
  const dialogHeader = dialogElement.querySelector("#topic-mdc-dialog-label")
  const dialogBody = dialogElement.querySelector("#topic-mdc-dialog-description")
  // const dialogFooter = dialogElement.querySelector(".mdc-dialog__footer")
  dialogHeader.innerHTML = `Topic : "${topicItem.Name}"`
  dialogBody.innerHTML = ""
  dialogBody.appendChild(getToipcModalBodyContent(topicItem))
  //   .dialog.listen("MDCDialog:accept", function() {
  //     console.log("accepted")
  //   })

  // dialog.listen("MDCDialog:cancel", function() {
  //   console.log("canceled")
  // })
  dialog.lastFocusedTarget = evt.target
  dialog.show()
}
