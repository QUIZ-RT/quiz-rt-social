export function storeChallenge(challenge) {
  postCreateChallengeData(challenge)
}

export function postCreateChallengeData(challenge) {
  console.log("challenge value:", challenge)
  const url = "http://localhost:8080/api/challenge"
   
  const promise = new Promise((resolve, reject) => {
    const stringify = require("json-stringify-safe")
    fetch(url,{headers: {
      "Content-Type": "application/json",
      "Cache-Control":"no-cache"
    },
    method: "POST",
    mode: "no-cors",
    body:stringify(challenge)
    }).then(
      res => res.json()
    ).then(json => {
      console.log("response", json)
      resolve(json);
    }, error => {
      reject(new ResponseError('Service Error' + error.message));
    })
  });
  return promise;
  }

