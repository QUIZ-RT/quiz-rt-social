import { hideLoader } from "../loader/loader.controller"
const fetch = require("node-fetch")

export const serviceCall = (url) => {  
    return fetch(url, {
      method: "get",     
    }).then(
      res => res.json()
    ).then(function(response) {    
      return response;
    }).catch(function(error) {
      console.log("Request failure: ", error); 
      hideLoader();     
    })
}
