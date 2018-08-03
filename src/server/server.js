import express from 'express';
import { FirebaseOAuth } from './FirebaseAuth/firebaseOAuth';
import { challaneDB } from './FirebaseDb/challengesDb';

const  app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
var bodyParser = require('body-parser');
app.use(bodyParser.json({ limit: '5mb' }));
 app.use("/api/firebase",(req,res)=>{
     const response =FirebaseOAuth();
     console.log(response.auth());
   res.send("Sucessfully Authentication");
});

app.use("/api/challenge",(req, res)=> {
    res.send(challaneDB(req, res));
});



var onlineUsers = [];

io.on('connection', function (socket) {

    socket.on('chatMessage', function (message) {
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
 
http.listen(8080, () => console.log('Example app listening on port 3000!'));