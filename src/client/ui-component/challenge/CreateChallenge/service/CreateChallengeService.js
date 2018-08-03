export function storeChallenge(challenge) {
  postCreateChallengeData(challenge)
}

export function postCreateChallengeData(challenge) {
  const stringify = require("json-stringify-safe")
  console.log("challenge value:", challenge)
  var url = "http://localhost:8080/api/challenge"

    var request = new Request(url, {
        method: 'POST',
        body: stringify(challenge),
        headers: new Headers(),
        mode: 'no-cors'
    });

    fetch(request)
        .then(function (result) {
            console.log(result);
        }) 
      }
