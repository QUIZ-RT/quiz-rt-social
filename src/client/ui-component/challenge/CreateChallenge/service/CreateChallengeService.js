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

export const getTopics = () => {
  const promise = new Promise(function(resolve, reject) {
    fetch("/api/topics/gettopics", {
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-cache",
      },
      method: "get",
    }).then(
      res => res.json()
    ).then(json => {
      resolve(json)
    }, error => {
      reject(error)
    })
  })
  return promise  
}

