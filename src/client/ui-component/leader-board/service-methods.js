
export const serviceCall = (url) => {  
    return fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        //"Cache-Control": "no-cache",
        "Access-Control-Allow-Origin" : "*",        
        "Access-Control-Expose-Headers": "Content-Length, X-JSON",
        "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        "Access-Control-Allow-Headers": "*"
      }
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
