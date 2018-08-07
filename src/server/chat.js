import firebase from "firebase"
import { config } from "./config";

export class Chat {
    constructor() {
        if (!firebase.apps.length) {
            firebase.initializeApp(config);
        }
    }

    addMessage(message) {
        let dbRef = firebase.database().ref();
        let messages = dbRef.child('messages').push();
        var key = messages.key;
        message.key = key;
        messages.set(message)
        return message;
    }

    getMessages(email) {
        let dbRef = firebase.database().ref();
        let unreadMessages = [];
        let messages = dbRef.child('messages');
        messages.orderByKey()
            .on('child_added', function (snapshot) {
                
                if (snapshot.val().remail === email && snapshot.val().readYn === 'no') {
                    unreadMessages.push(snapshot.val());

                }
            });           
        return unreadMessages;
    }

    updateMessage(message) {
        message.readYn = 'yes';
        let dbRef = firebase.database().ref();
        let path = 'messages/' + message.key
        let readMessage = dbRef.child(path);
        readMessage.set(message);
    }

}