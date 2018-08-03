import {config} from '../config';
import firbaseAuth from 'firebaseauth';

const firebase =new firbaseAuth(config.API_Key);

export const signInwithGoogle = (token) =>{
 
    firebase.loginWithGoogle(token,(err,result)=>{
        if(err)
            return ;
            else
            return result;
    });
    
}