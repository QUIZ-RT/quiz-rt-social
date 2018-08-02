 
  import {Store} from './Store';
 

  Store.subscribe(handler);
  
  
  function handler(){
    let state=Store.getState();
    if (!$.isEmptyObject(state) && state !={})
   //Call Back function
 
  }


