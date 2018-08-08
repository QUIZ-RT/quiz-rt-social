export const getUserChallenges = (userId) => {
    const promise = new Promise(function(resolve, reject) {
      fetch("/api/userChallenges", {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        body: JSON.stringify({"userId": userId}),
        method: "post",
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
  
  export const getUserFromUserMaster = (email) => {
    const promise = new Promise(function(resolve, reject) {
      fetch("/api/getUserFromUserMaster", {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        method: "post",
        body: JSON.stringify({"email": email}),
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
  
  