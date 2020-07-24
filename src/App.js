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

  componentDidMount() {
    document.addEventListener("keydown", this.keyDownHandler, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.keyDownHandler, false);
  }

  clickHander(key) {
    console.log('clicked!', key);
  }

  keyDownHandler(event) {
    console.log('pressed!:', event.key);
  }

  render() { 
    return ( 
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pad-container">
          {this.keys.map((key, i) => (
            <Drumpad drumKey={key} onClick={() => this.clickHander(key)} key={i} />
          ))}
        </div>
      </div>
     );
  }
}
 
export default App;
