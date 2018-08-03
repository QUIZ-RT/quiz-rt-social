import firebase from "firebase"
import { config } from "../config";



export const challaneDB = (req,resp) => {
    firebase.initializeApp(config);
    let fb = firebase.database().ref('data');
    let myUpdate = {};
    myUpdate.email = "XI";
    myUpdate.displayName = "ZZZ";
    myUpdate.status ="sss";
    fb.child("1").set(myUpdate);
    return "ucess";
}


