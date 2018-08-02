import express from 'express';
import { FirebaseOAuth } from './FirebaseAuth/firebaseOAuth';
import { challaneDB } from './FirebaseDb/challengesDb';

const  app = express();
 app.use("/api/firebase",(req,res)=>{
     var response =FirebaseOAuth();
     console.log(response.auth());
   res.send("Sucessfully Authentication");
});

app.use("/api/challenge",(req, res)=> {
    res.send(challaneDB(req, res));
});
 
app.listen(8080, () => console.log('Example app listening on port 3000!'));