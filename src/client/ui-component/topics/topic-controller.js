import { htmlToTemplate, topicView } from "./topic.view"
import { Store } from "../../boot/Store"
import { topicModalInitializeShow, createTopicmodal } from "../topic-modal/topic-modal.controller"
import $ from "jquery"
import { getTopicsFromQAGEN, addtopics, getTopics } from "./topics.service"
import {createLeaderBoardForChallenges} from "../leader-board/leader-controller"


let topicCtr = 0;
export const createTopics = () => { 
    getTopics()
      .then(result => {
        console.log(result);

        getTopicsFromQAGEN()
          .then(
            response => {
              let topicsDB = Object.keys(result);
              let topicFB = Object.keys(response)
              if (topicsDB.length !== topicFB.length) {
                let newtopics = topicsDB.filter(function (obj) { return topicFB.indexOf(obj) == -1; });
                for (let id of newtopics) {
                  result['' + id] = response['' + id];
                }
                addtopics(result).then(
                  res => {
                    console.log("res", res)
                    Store.dispatch({ "type": "ADD_TOPIC", "payload": result })
                  },
                  err => {
                    console.log(err)
                  })
              } else {
                Store.dispatch({ "type": "ADD_TOPIC", "payload": result })
              }
            }, error => {
              console.log(error);
            });

      }, errors => {
        console("getTopics error ", errors)
        getTopicsFromQAGEN()
          .then(
            result => {
              addtopics(result).then(
                res => {
                  console.log("res", res)
                  Store.dispatch({ "type": "ADD_TOPIC", "payload": result })
                },
                err => {
                  console.log(err)
                })
            },
            error => {             
              loadTopic(Store.getState().topicReducer.Topics)
            })
      })   

}

const loadTopic = (state) => {
  let topics = ""
  for (const newTopic in state) {
    topics += topicView(state[newTopic], newTopic)
  }
  render(topics)
  addEvents()
  createTopicmodal()
}

const render = (topics) => {
  const html = `
  <div>
    <input type="text" id="myInput" placeholder="Search for topics.." title="Type in a topic">
  </div>
  <div class="mdc-grid-list">
                <ul class="mdc-grid-list__tiles">
                    ${topics}
                </ul>
            </div>`
  const container = document.querySelector("#quiz-maincontent")
  container.appendChild(htmlToTemplate(html))
}

const addEvents = () => {
  const pTopicitems = document.querySelectorAll(".mdc-grid-tile")
  pTopicitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalInitializeShow(event)
    })
  })

  document.querySelector("#myInput").addEventListener("keyup", (event) => {
    const txt = document.querySelector("#myInput").value
    $(".mdc-grid-tile").hide()
    $(".mdc-grid-tile").each(function () {
      if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) !== -1) {
        $(this).show()
      }
    })
  })
}


Store.subscribe(() => {
  const currentState = Store.getState()
  if(currentState.menuReducer.currentView === 'topics'){
    
    //createTopicmodal()
    if (topicCtr === 0) {
      document.querySelector('#quiz-maincontent').innerHTML = ""
      createTopics();
      createLeaderBoardForChallenges()
      topicCtr++
    }else{
      if(currentState.topicReducer.Topic_Action!=='UPDATE_TOPIC')
      loadTopic(currentState.topicReducer.Topics)
    }
  }
})

