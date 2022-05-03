import React from 'react';
import Lesson from './Lesson';
import { createStore } from 'redux'; 
import reducer from "./reducers";

const initialState = { subject: "JavaScript" };
const store = createStore(reducer, initialState);
class App extends React.Component {
  constructor() {
    super();
    // this.state = {
    //   subject: "javascript"
    // };
  }

  render() {
    return (
      <div>
        <Lesson subject={store.getState().subject} />
      </div>
    )
  }
}

export default App;
