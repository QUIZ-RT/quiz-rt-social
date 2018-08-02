import config from '../config';
import firbaseAuth from 'firebaseauth';

export class emailAuthentication{
    constructor(){
        this.firebase =new firbaseAuth(config.API_Key);
    }

    registerUserWithEmail=(email,password)=>{
        this.firebase.registerUserWithEmail(email,password,"",(err,result)=>{
            if(err)
                console.log(err);
                else
                console.log(result);
        })
    }

    signInWithEmail=(email,password)=>{
        this.firebase.signInWithEmail(email,password,(err,result)=>{
            if(err)
            console.log(err);
            else
            console.log(result);
        });
    }

}