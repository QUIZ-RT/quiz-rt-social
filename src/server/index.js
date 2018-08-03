const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.use(bodyParser.json({ limit: '5mb' }));

// index.js 
// by requiring `babel/register`, all of our successive `require`s will be Babel'd
require('babel-register')({
    presets: [ 'es2015' ]
 });
 
 require('./server');
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

var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '0.0.0.0'

http.listen(server_port, server_ip_address, function () {
    console.log("Listening on " + server_ip_address + ", port " + server_port)    
});
