import { createStore } from 'redux';
import {dashboardReducer} from "../dashboard/dashboard.redux"
const chai = require('chai');
const should = chai.should();

describe('Dashboard', function() {
  it('Should have item for GET_TopicData', function() {
    const initialState = {}

    const store = createStore(dashboardReducer, initialState);
    

    // console.log('store.getState()', store.getState());
    const topics= {
      "test001": {
        "topicText": "Politics",
        "topicUrl": "",
        "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
        "createdDate": "11/11/2018",
        "createdBy": 1,
        "modifiedBy": 1,
        "modifiedDate": "11/11/2018",
        "published": true,
        "follow": true,
      }
    }
    const ptopic= {
      "test002": {
        "topicText": "Politics",
        "topicUrl": "",
        "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
        "createdDate": "11/11/2018",
        "createdBy": 1,
        "modifiedBy": 1,
        "modifiedDate": "11/11/2018",
        "published": true,
        "follow": true,
      }
    }
    const ftopic= {
      "test003": {
        "topicText": "Politics",
        "topicUrl": "",
        "topicImage": "https://vignette.wikia.nocookie.net/simpsons/images/6/60/No_Image_Available.png",
        "createdDate": "11/11/2018",
        "createdBy": 1,
        "modifiedBy": 1,
        "modifiedDate": "11/11/2018",
        "published": true,
        "follow": true,
      }
    }
    store.dispatch({
      type: 'GET_TopicData',
      dataItem: {"Topics" : topics, "PopularTopics": ptopic, "FavoriteTopics" : ftopic}
    });

    console.log('store.getState()', store.getState());

    store.getState().should.have.property('TopicList');
    store.getState().should.have.property('PopularTopicList');
    store.getState().should.have.property('FavoriteTopicList');

    // store.getState().items[1].should.have.property('id');
    // store.getState().items[1].should.have.property('text').and.equal('New item');
    // store.getState().items[1].should.have.property('isComplete').and.equal(false);

    // store.getState().items[0].should.have.property('text').and.equal(initialState.items[0].text);
    // store.getState().items[0].should.have.property('isComplete').and.equal(initialState.items[0].isComplete);
    // store.getState().items[0].should.have.property('id').and.equal(initialState.items[0].id);
  });
});