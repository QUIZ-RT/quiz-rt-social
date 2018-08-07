import {renderViewToContainer, getDashboardContainerTemplate, getPopularTopicTemplate, getFavTopicTemplate, getChallengesTemplate, getMyChallengesTemplate} from "./dashboard.view"
import {topicModalInitializeShow, createTopicmodal} from "../topic-modal/topic-modal.controller"
import {challengeModalInitializeShow, createChallengemodal} from "../challenge-modal/challenge-modal.controller"
import {showLoader, hideLoader} from "../loader/loader.controller"
import {getTopics} from "../topics/topics.service"
import {Store} from "../../boot/Store"

// const topicData = {
//   "test1": {
//     "topicText": "Politics",
//     "topicUrl": "",
//     "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
//     "createdDate": "11/11/2018",
//     "createdBy": 1,
//     "modifiedBy": 1,
//     "modifiedDate": "11/11/2018",
//     "published": true,
//     "follow": true,
//   },
//   "test2": {
//     "topicText": "Sports",
//     "topicUrl": "",
//     "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
//     "createdDate": "11/11/2018",
//     "createdBy": 1,
//     "modifiedBy": 1,
//     "modifiedDate": "11/11/2018",
//     "published": true,
//     "follow": true,
//   },
//   "test3": {
//     "topicText": "Environments",
//     "topicUrl": "",
//     "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
//     "createdDate": "11/11/2018",
//     "createdBy": 1,
//     "modifiedBy": 1,
//     "modifiedDate": "11/11/2018",
//     "published": true,
//     "follow": true,
//   },
// }
// const popularTopicData = [
//   {
//     "id": "1",
//     "Name": "Cricket",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "Cricket",
//   },
//   {
//     "id": "2",
//     "Name": "JavaScript",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "JavaScript",
//   },
//   {
//     "id": "3",
//     "Name": "Information Tech",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "Information Tech",
//   },
//   {
//     "id": "4",
//     "Name": "Cricket",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "Cricket",
//   },
//   {
//     "id": "5",
//     "Name": "JavaScript",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "JavaScript",
//   },
//   {
//     "id": "6",
//     "Name": "Information Tech",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "Information Tech",
//   },
//   {
//     "id": "7",
//     "Name": "Cricket",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "Cricket",
//   },
//   {
//     "id": "8",
//     "Name": "JavaScript",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "JavaScript",
//   },
//   {
//     "id": "9",
//     "Name": "Information Tech",
//     "Img": "topic002.png",
//     "Route": "NavigateToTopic",
//     "Title": "Information Tech",
//   },
// ]

// const challengeData = [
//   {
//     "Name": "Cricket",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "Cricket",
//   },
//   {
//     "Name": "JavaScript",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "JavaScript",
//   },
//   {
//     "Name": "Information Tech",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "Information Tech",
//   }, {
//     "Name": "Cricket",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "Cricket",
//   },
//   {
//     "Name": "JavaScript",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "JavaScript",
//   },
//   {
//     "Name": "Information Tech",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "Information Tech",
//   },
//   {
//     "Name": "Cricket",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "Cricket",
//   },
//   {
//     "Name": "JavaScript",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "JavaScript",
//   },
//   {
//     "Name": "Information Tech",
//     "Img": "challenges001.png",
//     "Route": "NavigateToTopic",
//     "Title": "Information Tech",
//   },
// ]

const challengeDataList = [
  {
    "challengeId":"01",
    "topicName": "sport",
    "challengeName": "chall",
    "questions":[
        {"qId":'1',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'2',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'3',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'4',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'5',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'6',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'7',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            }
    ]
},
{
    "challengeId":"06",
    "topicName": "sport",
    "challengeName": "ch2",
    "questions":[
        {"qId":'1',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'2',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'3',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'4',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'5',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'6',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'7',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            }
    ]
},
{
    "challengeId":"02",
    "topicName": "sport",
    "challengeName": "ch2",
    "questions":[
        {"qId":'1',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'2',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'3',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'4',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'5',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'6',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'7',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            }
    ]
},
{
    "challengeId":"03",
    "topicName": "sport",
    "challengeName": "ch2",
    "questions":[
        {"qId":'1',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'2',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'3',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'4',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'5',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'6',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'7',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            }
    ]
},
{
    "challengeId":"04",
    "topicName": "sport",
    "challengeName": "ch2",
    "questions":[
        {"qId":'1',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'2',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'3',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'4',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'5',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'6',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            },
            {"qId":'7',
            "question": "where are you from ?",
            "options":{
                    "optionA" : "Bangalore",
                    "optionB" : "Delhi",
                    "optionC" : "Kolkata",
                    "optionD" : "Mumbai",
            },
        "answer": "Bangalore"
            }
    ]
}
]

const getChallenges = () => {
  let promise = new Promise((resolve, reject) => {
    setTimeout(()=>{
      resolve(challengeDataList)
    }, 500)
  })
  return promise
}


export const loadDashBoardData = () => {
  getTopics().then(topicdata => {
    const pop_Topic = topicdata
    const fav_Topic = topicdata
    Store.dispatch({type: "GET_TopicData", dataItem: {Topics: topicdata, PopularTopics:pop_Topic, FavoriteTopics: fav_Topic }})
    // Store.dispatch({ "type": "ADD_TOPIC", "payload": topicdata })

  })
  getChallenges().then(challengedata => {
    const my_Challeges = challengedata
    Store.dispatch({type: "GET_ChallengeData", dataItem: {Challeges:challengedata, MyChalleges: my_Challeges }})
  })

}

const loadDashboardContainer = () => {
  const dashboardContainerTemp = getDashboardContainerTemplate();
  renderViewToContainer(dashboardContainerTemp, "#quiz-maincontent")
}


export const createPopularTopicSection = (topicData) => {
  document.querySelector('#dashboard_pTopic').innerHTML = ""
  const pTopictemp = getPopularTopicTemplate(topicData, "Popular Topic")
  const pTopicitems = pTopictemp.querySelectorAll(".mdc-card")
  pTopicitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalInitializeShow(event)
    })
  })
  renderViewToContainer(pTopictemp, "#dashboard_pTopic")
}
export const createFavoriteTopicSection = (topicData) => {
  document.querySelector('#dashboard_fTopic').innerHTML = ""
  const fTopictemp = getFavTopicTemplate(topicData, "Favorite Topic")
  const fTopicitems = fTopictemp.querySelectorAll(".mdc-card")
  fTopicitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      topicModalInitializeShow(event)
    })
  })
  renderViewToContainer(fTopictemp, "#dashboard_fTopic")
}
export const createChallengesSection = (challengeDataList) => {
  document.querySelector('#dashboard_challenge').innerHTML = ""
  const challengestemp = getChallengesTemplate(challengeDataList, "Challenges")
  const challengeitems = challengestemp.querySelectorAll(".mdc-card")
  challengeitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      challengeModalInitializeShow(event)
    })
  })
  renderViewToContainer(challengestemp, "#dashboard_challenge")
}
export const createMyChallengesSection = (challengeDataList) => {
  document.querySelector('#dashboard_mychallenge').innerHTML = ""
  const mychallengestemp = getMyChallengesTemplate(challengeDataList, "My Challenges")
  const mychallengeitems = mychallengestemp.querySelectorAll(".mdc-card")
  mychallengeitems.forEach((item) => {
    item.addEventListener("click", (event) => {
      challengeModalInitializeShow(event)
    })
  })
  renderViewToContainer(mychallengestemp, "#dashboard_mychallenge")
}


Store.subscribe(() => {
  const currentState = Store.getState()
  if(currentState.menuReducer.currentView === 'dashboard'){
    document.querySelector('#quiz-maincontent').innerHTML = ""
    showLoader()
    loadDashboardContainer()
    if(!currentState.dashboardReducer.Action || currentState.dashboardReducer.Action == "Init"){
    loadDashBoardData()
    }else{
      if (currentState.dashboardReducer.PopularTopicList && currentState.dashboardReducer.PopularTopicList !== []){
        createPopularTopicSection(currentState.dashboardReducer.PopularTopicList)
      }
      if (currentState.dashboardReducer.FavoriteTopicList && currentState.dashboardReducer.FavoriteTopicList !== []){
        createFavoriteTopicSection(currentState.dashboardReducer.FavoriteTopicList)
      }
      
      if (currentState.dashboardReducer.ChallegeList && currentState.dashboardReducer.ChallegeList !== []){
        createChallengesSection(currentState.dashboardReducer.ChallegeList)
      }
      if (currentState.dashboardReducer.MyChallegeList && currentState.dashboardReducer.MyChallegeList !== []){
        createMyChallengesSection(currentState.dashboardReducer.MyChallegeList)
      }
    }
    createTopicmodal()
    createChallengemodal();
    if(document.querySelector('#dashboard_pTopic').innerHTML !== ""
        && document.querySelector('#dashboard_fTopic').innerHTML !== ""
        && document.querySelector('#dashboard_challenge').innerHTML !== ""
        && document.querySelector('#dashboard_challenge').innerHTML !== ""){
            hideLoader()
        }
  }
})

