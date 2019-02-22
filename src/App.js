import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playing: false
    }
  }

  handleClick = () => this.setState({ playing: !this.state.playing})

  render() {
    const isPlaying = this.state.playing ? 'spinning' : ''
    return (
      <div onClick={this.handleClick} className="vinyl-wrapper">
        <div className={`vinyl ${isPlaying}`} >TCT</div>
      </div>
    );
  }
}

export default App;
