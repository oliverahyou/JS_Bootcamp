import React from 'react';
import Number from './Number';

//import the store from store/index.js file
import { store } from "./store";

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {/* //we call the <Day> Component */}
        <Number value={store.getState().value} />
      </div>
    )
  }
}

export default App;
