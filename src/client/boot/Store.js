import { createStore } from 'redux'
import reducer from './reducer';

<<<<<<< HEAD
let initialState = {

};

export const Store = createStore(reducer, initialState);
=======
const initialState = {
  currentView: "",
  PopularTopic: [],
  FavoriteTopic: [],
  MyChallanges: [],
  Challenges: [],
}

export const Store = createStore(reducer, initialState)
>>>>>>> 20e65e847efbfab83df4ae1574c5eab17b25c98e
