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

