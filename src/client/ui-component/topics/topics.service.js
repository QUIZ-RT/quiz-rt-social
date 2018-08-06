const addtopics = (topics) => {
    const promise = new Promise(function(resolve, reject) {
      fetch("/api/topics/addtopics", {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        method: "post",
        body: JSON.stringify(topics),
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
  
  const getTopics = () => {
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
  
  const updateFollow = (data) => {
    const promise = new Promise(function(resolve, reject) {
      fetch("/api/topics/updatefollow", {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        method: "post",
        body: JSON.stringify(data),
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
  
  const getTopicsFromFireBase = () => {
    const promise = new Promise(function(resolve) {
      const obj = {
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
          "users":[]
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
          "users":[]
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
          "users":[]
        },
      }
      resolve(obj)
    })
    return promise
  }
  
  export {
    addtopics,
    getTopics,
    updateFollow,
    getTopicsFromFireBase,
  
  }