import firebase from "firebase"
import { config } from "../config";
import {getStatus} from "../status";


export class Topics{
    constructor(){
        if (!firebase.apps.length){
            firebase.initializeApp(config);
        }
    }
   
    addTopic(topics){
        let dbRef = firebase.database().ref();
        let topic = dbRef.child('topics');
        topic.set(topics);
        return getStatus("Success","201",'');
    }

}

