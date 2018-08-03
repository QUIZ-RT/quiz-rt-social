import express from 'express';
import { FirebaseOAuth } from './FirebaseAuth/firebaseOAuth';
import { challaneDB } from './FirebaseDb/challengesDb';
import bodyParser  from 'body-parser';

const  app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
 app.use("/api/firebase",(req,res)=>{
     var response =FirebaseOAuth();
     console.log(response.auth());
   res.send("Sucessfully Authentication");
});

app.post("/api/challenge",(req, res)=> {
    res.send(challaneDB(req, res));
});
 
app.listen(8080, () => console.log('Example app listening on port 8080!'));