
export const serviceCall = (url) => {  
    return fetch(url, {
      method: "get",     
    }).then(
      res => res.json()
    ).then(function(response) {       
      debugger;
      return response;
    }).catch(function(error) {
      console.log("Request failure: ", error)
      reject(error)     
    })
}
