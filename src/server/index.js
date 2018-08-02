const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.get('/api/getMsg', (req, res) => res.send("Hellow World!"));
app.listen(process.env.PORT || 8080, () => console.log('Listening on port - '+process.env.PORT));