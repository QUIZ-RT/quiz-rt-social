import express from 'express';
import bodyParser from 'body-parser';
import { FirebaseOAuth } from './FirebaseAuth/firebaseOAuth';
import { challaneDB } from './FirebaseDb/challengesDb';
import { Topics } from './topics/topics';


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/api/firebase", (req, res) => {
    var response = FirebaseOAuth();
    console.log(response.auth());
    res.send("Sucessfully Authentication");
});

const topic = new Topics();

app.use("/api/challenge", (req, res) => {
    res.send(challaneDB(req, res));
});

app.use("/api/topics/addtopics", (req, res) => {
    //console.log(req.body)
    res.send(topic.addTopic(req.body));
});

app.use("/api/topics/gettopics", (req, res) => {
    console.log(req.body)
    res.send(req.body);
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
    console.log(req.body)
    res.send(req.body);
});



app.listen(8080, () => console.log('Example app listening on port 3000!'));