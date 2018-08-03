// const express = require('express');
// const os = require('os');

// const app = express();

// app.use(express.static('dist'));
// app.get('/api/getMsg', (req, res) => res.send("Hellow World!"));
// app.listen(8080, () => console.log('Listening on port 8080!'));

// index.js 
// by requiring `babel/register`, all of our successive `require`s will be Babel'd
require('babel-register')({
    presets: [ 'es2015' ]
 });
 
 require('./server');