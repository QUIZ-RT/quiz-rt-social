import express from 'express';
import bodyParser from 'body-parser';
import { FirebaseOAuth } from './FirebaseAuth/firebaseOAuth';
import { challaneDB } from './FirebaseDb/challengesDb';
import { Topics } from './topics/topics';
import { Chat } from './chat';

const app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//  app.use("/api/firebase",(req,res)=>{
//      var response =FirebaseOAuth();
//      console.log(response.auth());
//    res.send("Sucessfully Authentication");
// });


app.post("/api/challenge",(req, res)=> {
    res.send(challaneDB(req, res));
});

//expose API to Question Generator
app.use("/api/allChallenges",(req, res)=> {
    let data = getAllChallengesFromDB(req, res);
    data.then(
        result=>{
            res.send(result);
        },
        error=>{
            res.send(error);
        }        
    )

app.get("/api/friends", (req, res) => {
    console.log(req.query.userName)
    const friends = []
    for (let i = 0; i < 10; i++) {
      friends.push({
        userName: "userName_" + i,
        firstName: "FirstName_" + i,
        lastName: "LastName_" + i,
        id: i,
      })
    }
    res.send(friends);
});

app.get("/api/friends/pendingReq", (req, res) => {
    console.log(req.query.userName)
    const friends = []
    for (let i = 0; i < 10; i++) {
      friends.push({
        userName: "userName_" + i,
        firstName: "P_FirstName_" + i,
        lastName: "P_LastName_" + i,
        id: i,
      })
    }
    res.send(friends);
});

app.get("/api/friends/search", (req, res) => {
    console.log(req.query.value)
    const val = req.query.value
    const friends = []
    for (let i = 0; i < 10; i++) {
      friends.push({
        userName: val+"_userName_" + i,
        firstName: val+"_FirstName_" + i,
        lastName: val+"_LastName_" + i,
        id: i,
      })
    }
    res.send(friends);
});



app.post("/api/friends/accept", (req, res) => {
    console.log(req.body.req_id)
    console.log("Friend request accpeted")
    res.sendStatus(200)
});

app.post("/api/friends/reject", (req, res) => {
    console.log(req.body.req_id)
    console.log("Friend request rejected")
    res.sendStatus(200)
});

app.post("/api/friends/sendFrndReq", (req, res) => {
    console.log(req.body.sender)
    console.log(req.body.reciever)
    console.log("Friend request recieved")
    res.sendStatus(200)
});
const chat = new Chat();
var onlineUsers = [];

io.on('connection', function (socket) {

    socket.on('chatMessage', function (message) {
        message.readYn = 'no';
        message = chat.addMessage(message);
        io.to(message.receiver).emit('chatMessage', message);
    });

    socket.on('notifyTyping', function (sender, receiver) {
        io.to(receiver.id).emit('notifyTyping', sender, receiver);
    });

    socket.on('newUser', function (user) {
        var newUser = { id: socket.id, name: user };
        onlineUsers.push(newUser);
        io.to(socket.id).emit('newUser', newUser);
        io.emit('onlineUsers', onlineUsers);
        let allMessages = chat.getMessages(user);
        allMessages.forEach(function (message) {
            message.receiver = socket.id;
            io.to(message.receiver).emit('chatMessage', message);
        })
    });

    socket.on('disconnect', function () {
        onlineUsers.forEach(function (user, index) {
            if (user.id === socket.id) {
                onlineUsers.splice(index, 1);
                io.emit('userIsDisconnected', socket.id);
                io.emit('onlineUsers', onlineUsers);
            }
        });
    });
});

app.use("/api/chat/updateMessage", (req, res) => {
    res.send(chat.updateMessage(req.body));
});

const topic = new Topics();

app.use("/api/topics/addtopics", (req, res) => {
    res.send(topic.addTopic(req.body));
});

app.use("/api/topics/gettopics", (req, res) => {
    let data = topic.getTopics();
    data.then(
        result=>{
            res.send(result);
        },
        error=>{
            res.send(error);
        }        
    )
});

app.use("/api/topics/updatetopics", (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

app.use("/api/topics/deletetopics", (req, res) => {
    console.log(req.body)
    res.send(req.body);
});

app.use("/api/topics/updatefollow", (req, res) => {
    console.log(req.body);
    topic.updateFollow(req.body.id,req.body.data);
    res.send({"status":"success"});
});

http.listen(8080, () => console.log('Example app listening on port 8080!'));
