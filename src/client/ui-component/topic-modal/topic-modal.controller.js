import {MDCDialog} from "@material/dialog"
import {MDCSelect} from "@material/select/index"
import {renderViewToContainer, getTopicModalbox, getToipcModalBodyContent} from "./topic-modal.view"
import {Store} from "../../boot/Store"
import {updateFollow} from "../topics/topics.service"

export const createTopicmodal = () => {
  const topicModaltemplate = getTopicModalbox()
  renderViewToContainer(topicModaltemplate, "#quiz-maincontent")
}
export const topicModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  console.log(targetId)
  //const state = topicDataList[targetId]
  const state = Store.getState().topicReducer;
  
  //.topics["" + targetId]
  openTopicModal(state[''+targetId], targetId, evt.target)
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
  const state = Store.getState().topicReducer
  let data  = {"id":topicId,"data":[]}
  let topic = ""
  let userid ="ranjitjena199@gmail.com"
  switch (btnData[2]) {
  case "play":
    console.log("play" + topicId)
    break
  case "leader":
    console.log("leader" + topicId)
    break
  case "unfollow":
    topic = state["" + topicId]
    //topic.follow = !topic.follow
    let ind = topic.users.indexOf(userid)
    if(ind>-1){
      topic.users.splice(ind,1)
    }
    data.data = topic.users;
    updateFollow(data).then(result=>{
      console.log(result)
      topic.users = data.data;
      render(topic, topicId)
    },error=>{
      console.log(error);
    })
    break
  case "follow":
    topic = state["" + topicId]     
    if(topic.users!==undefined){
      data.data = [userid];
    }else{
      data.data.push(userid);
    }
    updateFollow(data).then(result=>{
      topic.users = data.data;
      render(topic, topicId)
    },error=>{
      console.log(error);
    });
    
    break
  }
}
