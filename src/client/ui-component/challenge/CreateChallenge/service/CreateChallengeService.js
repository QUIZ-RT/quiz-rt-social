import {Store} from '../../../../boot/Store'
import {createChallengeHeaderTemplate} from '../view/CreateChallengeView'

export const storeChallenge = (challengeJsonObj) => {
  var settings = {
    "url": "/api/challenge",
    "type": "POST",
    "mode": "no-cors",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    "data": JSON.stringify(challengeJsonObj),
  }

  $.ajax(settings).done(function(response) {
    console.log(response)
  })
}

export const storeUserTransaction = (transactionJsonObj) => {
  var settings = {
    "url": "/api/challenge",
    "type": "POST",
    "mode": "no-cors",
    "headers": {
      "content-type": "application/json",
      "cache-control": "no-cache",
    },
    "data": JSON.stringify(transactionJsonObj),
  }

  $.ajax(settings).done(function(response) {
    console.log(response)
  })
}

export const getTopics = () => {
    fetch("/api/topics/gettopics", {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      method: "get",
    }).then(
      res => res.json()
    ).then(result => {
      //Store.dispatch({ "type": "CHALLENGE_TOPICS", dataItem: result })
      createChallengeHeaderTemplate(Object.values(result.data));
    }, error => {
      console.log(error)
    }) 
}

