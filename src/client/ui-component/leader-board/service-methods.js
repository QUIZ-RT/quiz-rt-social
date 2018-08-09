
export const serviceCall = (url) => {  
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
        //"Cache-Control": "no-cache",
      }  
    }).then(
      res => res.json()
    ).then(function(response) {       
      return response;
    }).catch(function(error) {
      console.log("Request failure: ", error)
      reject(error)     
    })
}
