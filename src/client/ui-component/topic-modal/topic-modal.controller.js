import { MDCDialog } from "@material/dialog"
import { MDCSelect } from "@material/select/index"
import { renderViewToContainer, getTopicModalbox, getToipcModalBodyContent } from "./topic-modal.view"
import { Store } from "../../boot/Store"
import { updateFollow } from "../topics/topics.service"
import { getFilteredGameDetails } from "../leader-board/leader-controller"
import { showLoader, hideLoader } from "../loader/loader.controller"
import { serviceCall} from "../leader-board/service-methods"

export const createTopicmodal = () => {
  const topicModaltemplate = getTopicModalbox()
  renderViewToContainer(topicModaltemplate, "#quiz-maincontent")
}
export const topicModalInitializeShow = (evt) => {
  const targetId = evt.currentTarget.id.split("_")[1]
  console.log(targetId)
  //const state = topicDataList[targetId]
  const state = Store.getState();

  //.topics["" + targetId]
  //.topics["" + targetId]
  if (state.menuReducer.currentView === "dashboard") {
    openTopicModal(state.dashboardReducer.TopicList['' + targetId], targetId, evt.target, state.menuReducer.currentUserInfo.email)

  }
  else if (state.menuReducer.currentView === "topics") {
    openTopicModal(state.topicReducer.Topics['' + targetId], targetId, evt.target, state.menuReducer.currentUserInfo.email)
  }
  evt.preventDefault()
}

const openTopicModal = (state, id, target, emailId) => {
  const dialogElement = document.querySelector("#topic-mdc-dialog")
  const dialog = new MDCDialog(dialogElement)
  const dialogHeader = dialogElement.querySelector("#topic-mdc-dialog-label")
  dialogHeader.innerHTML = `Topic : ${state.topicText}`
  render(state, id, emailId)
  dialog.listen("MDCDialog:cancel", function () {
    console.log("canceled")
  })

  dialog.listen("MDCDialog:cancel", function () {
    console.log("canceled")
  })

  // ///////////////////////// Leader Board Related Code///////////////////////////////
  document.querySelector(".btnLeaderBoard").addEventListener("click", function (event) {
    debugger;
    showLoader();
    const btnData = event.target.id.split("-")
    const topicId = btnData[1]
    sessionStorage.setItem("topicId", topicId);
    // serviceCall(`https://quiz-engine.herokuapp.com/api/games/${topicId}`)
    //   .then(function (data) {

       
    //   })

      let array = new Array();
      let data = `{"-LJRxCNoPunGRNfH278s":{"id":659124902,"players":[{"name":"Parveen Khan","score":0},
      {"name":"Gopi Nath","score":0}],"topicId":"1"},"-LJS4FG44DZ3V2wrotIU":{"id":532996625,"players"
      :[{"name":"Gopi Nath","score":0},{"name":"Gopi Nath","score":0}],"topicId":"1"},
      "-LJS5ofoG0wk4CwYYwyx":{"id":867291489,"players":[{"name":"Parveen Khan","score":0},
      {"name":"Gopi Nath","score":0}],"topicId":"1"},"-LJS9wI9QjmDXdrAaooe":{"id":863329166,
      "players":[{"name":"Gopi Nath","score":0},{"name":"Gopi Nath","score":0}],"topicId":"1"}}`;
      data = JSON.parse(data);
      for (let item of Object.values(data)) {
        if (item)
          array.push(item);
      }
      
      getFilteredGameDetails(array, 1)

      const dialogElement1 = document.querySelector("#topic-mdc-dialog")
      const dialog1 = new MDCDialog(dialogElement1)
      dialog1.close()

      const dialogElement2 = document.querySelector("#leaderBrd-mdc-dialog")
      const dialog2 = new MDCDialog(dialogElement2)
      dialog2.show()
      hideLoader();

      dialog2.listen("MDCDialog:cancel", function () {
        document.getElementById("leaderBody").innerHTML = ""
        const select2 = new MDCSelect(document.querySelector(".mdc-select"))
        select2.value = "1"
        sessionStorage.removeItem("topicId");
        dialog1.close()
        document.getElementById("challenge-mdc-dialog").classList.remove("mdc-dialog--animating");
      })
      const select = new MDCSelect(document.querySelector(".mdc-select"))
      select.listen("change", () => {
        let topicId = sessionStorage.getItem("topicId");
        serviceCall(`https://game-engine-beta.herokuapp.com/api/games/${topicId}`)
          .then(function (data) {
            let array = new Array();
            for (let item of data) {
              if (item)
                array.push(item);
            }
            getFilteredGameDetails(array, select.value);
          })
      })
  })
  // ////////////////////////////////////////////////////////////////////////////////////

  dialog.lastFocusedTarget = target
  dialog.show()
}

const render = (state, id, emailId) => {
  const dialogBody = document.querySelector("#topic-mdc-dialog-description")
  const topicModalBodyTemp = getToipcModalBodyContent(state, id, emailId)
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
  showLoader()
  const btnData = event.target.id.split("-")
  const topicId = btnData[1]
  const state = Store.getState()
  let topicData = ""
  if (state.menuReducer.currentView === "dashboard") {
    topicData = state.dashboardReducer.TopicList
  }
  else if (state.menuReducer.currentView === "topics") {
    topicData = state.topicReducer.Topics
  }
  let data = { "id": topicId, "data": [] }
  let topic = ""
  let userid = state.menuReducer.currentUserInfo.email
  switch (btnData[2]) {
    case "play":
      const url = "https://quiz-engine.herokuapp.com/?topicId=" + topicId
      window.open(url, '_blank');
      hideLoader()
      break
    case "leader":
      console.log("leader" + topicId)
      break
    case "unfollow":
      topic = topicData["" + topicId]
      let ind = topic.users.indexOf(userid)
      if (ind > -1) {
        topic.users.splice(ind, 1)
      }
      data.data = topic.users;
      updateFollow(data).then(result => {
        console.log(result)
        topic.users = data.data;
        topicData["" + topicId]['users'] = topic.users
        if (state.menuReducer.currentView !== "dashboard") {
          Store.dispatch({ "type": "UPDATE_TOPIC", "payload": topicData })
          document.getElementById("topic_follower_" + topicId).innerHTML = topic.users.length;
        } else {
          Store.dispatch({ "type": "UPDATE_Dashboard_Topic", "dataItem": topicData })
        }
        render(topic, topicId, userid)
        hideLoader()
      }, error => {
        console.log(error);
        hideLoader()
      })

      break
    case "follow":
      topic = topicData["" + topicId]
      if (topic.users !== undefined) {
        topic.users.push(userid)
      } else {
        topic.users = [userid];
      }
      data.data = topic.users
      updateFollow(data).then(result => {
        topicData["" + topicId]['users'] = topic.users
        render(topic, topicId, userid)
        if (state.menuReducer.currentView !== "dashboard") {
          Store.dispatch({ "type": "UPDATE_TOPIC", "payload": topicData })
          document.getElementById("topic_follower_" + topicId).innerHTML = topic.users.length;
        } else {
          Store.dispatch({ "type": "UPDATE_Dashboard_Topic", "dataItem": topicData })
        }
        hideLoader()
      }, error => {
        console.log(error);
        hideLoader()
      });
      break
  }

}