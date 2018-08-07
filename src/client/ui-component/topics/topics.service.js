const addtopics = (topics) => {
    const promise = new Promise(function(resolve, reject) {
      let obj = {};
      fetch("/api/topics/addtopics", {
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": "no-cache",
        },
        method: "post",
        body: JSON.stringify(topics),
      }).then(
        res => res.json()
      ).then(data => {
        data.forEach(element => {
          obj[""+element.id]=element;
        });
        resolve(obj)
      }, error => {
        reject(error)
      })
    })
    return promise
  }
 
  const addNewTopics = (topics) => {
    const promise = new Promise(function(resolve, reject) {
      fetch("/api/topics/addNewTopics", {
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
  
  const getTopicsFromQAGEN = () => {
    const promise = new Promise(function(resolve,reject) {
      let obj = {};
      fetch("https://quizgenx.herokuapp.com/firebase/api/topics", {      
        method: "get",
      }).then(
        res => res.json()
      ).then(data => {
        console.log("gettopicfromservice - ",data)
        data.forEach(element => {
          obj[""+element.id]=element;
        });
        resolve(obj)
      }, error => {
        reject(error)
      })

    })
    return promise
  }
  
  export {
    addtopics,
    getTopics,
    updateFollow,
    getTopicsFromQAGEN,
  
  }