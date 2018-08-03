import {MDCDialog} from "@material/dialog"
import {renderViewToContainer, getTopicModalbox, getToipcModalBodyContent} from "./topic-modal.view"
// import {Store} from "../../boot/Store"

const topicDataList = {
  "t1": {
    "topicText": "Politics",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t2": {
    "topicText": "Sports",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t3": {
    "topicText": "Envioments",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t4": {
    "topicText": "Politics",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t5": {
    "topicText": "Sports",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t6": {
    "topicText": "Envioments",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t7": {
    "topicText": "Politics",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t8": {
    "topicText": "Sports",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t9": {
    "topicText": "Envioments",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t10": {
    "topicText": "Politics",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t11": {
    "topicText": "Sports",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
  "t12": {
    "topicText": "Envioments",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
  },
}

export const createTopicmodal = () => {
  const topicModaltemplate = getTopicModalbox()
  renderViewToContainer(topicModaltemplate, "main")
}
export const topicModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  console.log(targetId)
  const state = topicDataList[targetId]
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
