import React, { Component } from 'react';
import './App.css';
import Hours from './Hours';
import Minutes from'./Minutes';
import Secondes from './Secondes';
class App extends Component {
  render() {
    return (
     <div className="Timer">
        <Hours />
        <Minutes />
        <Secondes />
     </div>
    );
  }
}

export default App;
