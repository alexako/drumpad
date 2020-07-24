import React, { Component } from 'react';
import './App.scss';
import Drumpad from './Drumpad';
import { Sounds } from './shared/globals';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
     }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.flashDrumpad, false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.flashDrumpad, false);
  }

  onMouseDownHandler(key) {
    this.flashDrumpad({key: key})
  }

  flashDrumpad(event) {
    const drumpadId = event.key
    if (Object.keys(Sounds).indexOf(drumpadId) === -1) {
      return
    }

    const drumpadEl = document.getElementById(drumpadId)
    drumpadEl.classList.add('drum-pad--active')
    setTimeout(() => {
      drumpadEl.classList.remove('drum-pad--active')
    }, 200)
  }

  render() { 
    return ( 
      <div id="drum-machine">
        <div id="display"></div>
        <div className="drum-pad-container">
          {Object.keys(Sounds).map((key, i) => (
            <Drumpad
              drumKey={key}
              onMouseDown={() => this.onMouseDownHandler(key)}
              key={i} />
          ))}
        </div>
      </div>
     );
  }
}
 
export default App;