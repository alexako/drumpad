import React, { Component } from 'react';
import './App.scss';
import Drumpad from './Drumpad';
import { Sounds } from './shared/globals';
import Display from './Display';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      displayVal: 'Press a button'
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", (event) => this.flashDrumpad(this, event), false);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.flashDrumpad, false);
  }

  onMouseDownHandler(key) {
    this.flashDrumpad(this, {key: key})
  }

  flashDrumpad(self, event) {
    const drumpadId = event.key
    if (Object.keys(Sounds).indexOf(drumpadId) === -1) {
      return
    }

    self.setState({
      displayVal: Sounds[drumpadId].desc
    })

    const drumpadEl = document.getElementById(drumpadId)
    drumpadEl.classList.add('drum-pad--active')
    setTimeout(() => {
      drumpadEl.classList.remove('drum-pad--active')
    }, 200)
  }

  render() { 
    return ( 
      <div id="drum-machine">
        <Display soundDesc={this.state.displayVal} />
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
