const addtopics = (topics) => {
  console.log(topics)
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

}

const updateFollow = (user) => {
  console.log(user)
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
