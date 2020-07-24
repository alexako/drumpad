import React, { Component } from 'react';
import './App.scss';
import Drumpad from './Drumpad';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }

  keys = ['Q', 'W', 'E', 'A', 'S', 'D', 'Z', 'X', 'C'];

  clickHander(event) {
    console.log('clicked!', event);
  }

  render() { 
    return ( 
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pad-container">
          {this.keys.map((k, i) => (
            <Drumpad drumKey={k} onClick={() => this.clickHander(k)} key={i} />
          ))}
        </div>
      </div>
     );
  }
}
 
export default App;
