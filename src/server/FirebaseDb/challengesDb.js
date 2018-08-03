import firebase from "firebase"
import { config } from "../config";



export const challaneDB = (request) => {
if (!firebase.apps.length){
    firebase.initializeApp(config);
}
 
let fb = firebase.database().ref('data');
fb.child("9").set(request);
    // let fb = firebase.database().ref('data');
    // let myUpdate = {};
    // myUpdate.email = "XI";
    // myUpdate.displayName = "ZZZ";
    // myUpdate.status ="sss";
    // fb.child("8").set(myUpdate);
    // console.log(fb);
    return "Success";
}
