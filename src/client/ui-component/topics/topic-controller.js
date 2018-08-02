import {topicView} from "./topic.view"
import {quizStore} from "../../store/quiz-store"
import {topicModalInitializeShow} from "../topic-modal/topic-modal.controller"

const topicCltrl = () => {
  const obj = quizStore.getState()

  let topics = ""

  for (const newTopic in obj.topicReducer.topics) {
    topics += topicView(obj.topicReducer.topics[newTopic], newTopic)
  }

  render(topics)
  addEvents()
}

const render = (topics) => {
  const html = `<div class="mdc-grid-list">
                <ul class="mdc-grid-list__tiles">
                    ${topics}
                </ul>
            </div>`
  const container = document.querySelector("main")
  container.innerHTML = html
}

const addEvents = () => {
  const pTopicitems = document.querySelectorAll(".mdc-grid-tile")
  pTopicitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalInitializeShow(event)
    })
  })
}

export {
  topicCltrl,
}
