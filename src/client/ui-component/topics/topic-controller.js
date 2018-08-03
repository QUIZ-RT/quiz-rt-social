import {topicView} from "./topic.view"
import {Store} from "../../boot/Store"
import {topicModalInitializeShow, createTopicmodal} from "../topic-modal/topic-modal.controller"
import $ from "jquery"

export const createTopics = () => {
  const obj = Store.getState()
  let topics = ""
  for (const newTopic in obj.topicReducer.topics) {
    topics += topicView(obj.topicReducer.topics[newTopic], newTopic)
  }
  render(topics)
  addEvents()
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
  container.innerHTML = html
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
    $(".mdc-grid-tile").each(function() {
      if ($(this).text().toUpperCase().indexOf(txt.toUpperCase()) !== -1) {
        $(this).show()
      }
    })
  })
}


Store.subscribe(() => {
  const currentState = Store.getState()
  if(currentState.menuReducer.currentView === 'topics'){
    document.querySelector('#quiz-maincontent').innerHTML = ""
    createTopicmodal()
    createTopics();
  }
})

