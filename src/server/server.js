import express from 'express';
import bodyParser from 'body-parser';
import { FirebaseOAuth } from './FirebaseAuth/firebaseOAuth';
import { addChallengeToDB,getUserDetail,updateUserTransaction } from './FirebaseDb/challengesDb';
import { searchMasterUser, getUserByEmailId, getUserByUserId, sendFriendRequest, getPendingFriendRequest, getFriendRequest, acceptFriendReq, rejectFriendReq, getListOfFriend } from './FirebaseDb/Friends';
import { getAllChallengesFromDB } from './FirebaseDb/challengesDb';
import { Topics } from './topics/topics';
import { Chat } from './Chat';

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
//      //console.log(response.auth());
//    res.send("Sucessfully Authentication");
// });


app.post("/api/challenge",(req, res)=> {
    let data = addChallengeToDB(req, res);
    data.then(
         result=>{
            res.send(result);
             },
        error=>{
            res.send(error);
            }     
        )
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
})

//udate User Transaction
app.use("/api/userTransaction",(req, res)=> {
    //console.log("inside api/userTransaction");
    let data = updateUserTransaction(req, res);
    data.then(
        result=>{
            res.send(result);
        },
        error=>{
            res.send(error);
        }        
    )
})

app.get("/api/friends", (req, res) => {
    //console.log(req.query.userName)
    const frndPromise = getListOfFriend(req.query.userName)
    frndPromise.then(
        result => {
            //console.log("recieved pending req")
            //console.log(result.val())
            const frnList = []
            const val = result.val()
            result.forEach(function(data) {
                frnList.push(val[data.key]['friend'])
            })
            //console.log("Printing friend list ", frnList)
            res.send(frnList)
        },
        error => {
            //console.log("/api/frined")
            //console.log(error)
            res.sendStatus(500)
        })
});

app.get("/api/friends/pendingReq", (req, res) => {
    //console.log("inside /api/friends/pendingReq")
    //console.log(req.query.userName)
    let frndReq = []
    const frndRequest = getPendingFriendRequest(req.query.userName)
    frndRequest.then(
        result => {
            //console.log("recieved pending req")
            //console.log(result.val())
            let frndReq = []
            const val = result.val()
            result.forEach(function(data){
                //console.log("----------------")
                //console.log(val[data.key])
                const tempVal =  {}
                tempVal['displayName'] = val[data.key]['sender']['displayName']
                tempVal['reqId'] = data.key
                //console.log(tempVal)

                if(val[data.key]["status"] && val[data.key]["status"] === 'P'){
                    //console.log("temp val is getting added")
                    frndReq.push(tempVal)
                }
            })
            //console.log(frndReq)
            res.send(frndReq)
        },
        error => {
            //console.log("error in pending req")
            //console.log(error)
            res.sendStatus(500)
        })
});

app.get("/api/friends/search", (req, res) => {
    //console.log("in api friends search")
    //console.log(req.query.value)
    const friendPromise = searchMasterUser(req.query.value)
    friendPromise.then(
        result => {
            const users = []
            const val = result.val()
            result.forEach(function(data) {
                //console.log("----------")
                //console.log(data.key)
                const tempVal = val[data.key]
                tempVal["key"] = data.key
                if(tempVal['displayName'] &&  tempVal['displayName'].includes(req.query.value)){
                    users.push(tempVal)
                }
            })
            res.send(users)
        },
        error => {
            res.send(error)
        })
});



app.post("/api/friends/accept", (req, res) => {
    //console.log(req.body.req_id)
    //console.log("Friend request accpeted")
    const reqDetails = getFriendRequest(req.body.req_id)
    reqDetails.then(
        result => {
            //console.log(result.val())
            const val = result.val()
            result.forEach(function(data) {
                const tempVal = val[data.key]
                //console.log("*********")
                //console.log(tempVal)
                //console.log("*********")
                const ret = acceptFriendReq(data.key, tempVal['sender'], tempVal['receiver'])
                ret.then(
                    result => {
                        res.sendStatus(200)
                    },
                    error => {
                        //console.log("/api/friends/accept 22")
                        //console.log(error)
                        res.sendStatus(500)            
                    })
            })
        },
        error => {
            //console.log("/api/friends/accept")
            //console.log(error)
            res.sendStatus(500)
        });
    
});

app.post("/api/friends/reject", (req, res) => {
    //console.log("/api/friends/reject")
    //console.log(req.body.req_id)
    const reject = rejectFriendReq(req.body.req_id)
    reject.then(
        result => {
            res.sendStatus(200)
        },
        error => {
            //console.log("/api/friends/reject")
            //console.log(error)
            res.sendStatus(500)
        })
});

app.post("/api/friends/sendFrndReq", (req, res) => {
    //console.log(req.body.sender)
    //console.log(req.body.reciever)
    const searchSender = getUserByEmailId(req.body.sender)
    let sender
    let reciver
    searchSender.then(
        result => {
            const val = result.val()

            result.forEach(function(data) {
                const tempVal = val[data.key]
                sender = tempVal
                //console.log("Yeee")
                //break
            })

            const searchReciever = getUserByEmailId(req.body.reciever)
            searchReciever.then(
                result => {
                    const val = result.val()

                    result.forEach(function(data) {
                        const tempVal = val[data.key]
                        reciver = tempVal
                        //console.log("Yeee")
                        //break
                    })
                    if(sender && reciver){
                        //console.log("adding frnd req")
                        sendFriendRequest(sender, reciver)
                        res.sendStatus(200)    
                    }
                    else{
                        //console.log("Some value is missing ",sender, reciver)
                    }
                    

                },
                error => {
                    res.send(error)
                })
        },
        error => {
            res.send(error)
        })
    
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
        io.to(receiver.socketId).emit('notifyTyping', sender, receiver);
    });

    socket.on('newUser', function (user) {
        let newUser = { socketId: socket.id, user: user };
        onlineUsers.push(newUser);
        io.to(socket.id).emit('newUser', newUser);
        io.emit('onlineUsers', onlineUsers);
        let allMessages = chat.getMessages(user.displayName);
        allMessages.then(
            result => {               
                const val = result.val()
                result.forEach(function(data) {
                    const tempVal = val[data.key]
                    tempVal["key"] = data.key
                    if(tempVal['rdisplayName'] &&  tempVal['rdisplayName'].includes(user.displayName)
                && tempVal['readYn'].includes('no')){
                        console.log(tempVal);
                        io.to(socket.id).emit('chatMessage', tempVal);
                    }
                })
            },
            error => {
                
            })
        
    });

    socket.on('disconnect', function () {
        onlineUsers.forEach(function (user, index) {
            if (user.socketId === socket.id) {
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
           //console.log("result gettopics- ",result);
           res.send({"status":"success","data":result});
        },
        error=>{
            //console.log("result errors- ",error);
            res.send({"status":"fail","data":error});
        }        
    )
});

app.use("/api/topics/updatetopics", (req, res) => {
    //console.log(req.body)
    res.send(req.body);
});

app.use("/api/topics/deletetopics", (req, res) => {
    //console.log(req.body)
    res.send(req.body);
});

app.use("/api/topics/updatefollow", (req, res) => {
    //console.log(req.body);
    topic.updateFollow(req.body.id,req.body.data);
    res.send({"status":"success"});
});

app.use("/api/getUserDetail",(req, res)=> {
    let data = getUserDetail(req, res);
    data.then(
        result=>{
            res.send(result);
        },
        error=>{
            res.send(error);
        }        
    )
})
 
http.listen(8080, () => console.log('Example app listening on port 8080!'));
