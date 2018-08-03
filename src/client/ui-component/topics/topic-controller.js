import {topicView} from "./topic.view"
import {Store} from "../../boot/Store"
import {topicModalInitializeShow, createTopicmodal} from "../topic-modal/topic-modal.controller"
import $ from "jquery"

const topicsList = {
  "test1": {
    "topicText": "Politics",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
    "follow": true,
  },
  "test2": {
    "topicText": "Sports",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
    "follow": true,
  },
  "test3": {
    "topicText": "Envioments",
    "topicUrl": "",
    "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
    "createdDate": "11/11/2018",
    "createdBy": 1,
    "modifiedBy": 1,
    "modifiedDate": "11/11/2018",
    "published": true,
    "follow": true,
  },
}


  



export const createTopics = () => {
  const state = Store.getState()
 
 
  ///////////////////For Demo Data///////////////
  state.topicReducer={TopicList : topicsList}
/////////////////////////////////////////////////

  let topics = ""
  for (const newTopicId in state.topicReducer.TopicList) {
    topics += topicView(state.topicReducer.TopicList[newTopicId], newTopicId)
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

