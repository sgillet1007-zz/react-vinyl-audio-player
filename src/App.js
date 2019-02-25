import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      playing: false
    }
    const {audioUri} = this.props.data
    this.audioTrack = new Audio(audioUri)
  }

  handleClick = () => {
    if(!this.state.playing){
      this.audioTrack.play()
    } else if (this.state.playing){
      this.audioTrack.pause()
    }
    this.setState({ playing: !this.state.playing})
  }

  render() {
    const isPlaying = this.state.playing ? 'spinning' : ''
    const {title} = this.props.data
    return (
      <div onClick={this.handleClick} className="vinyl-wrapper">
        <div className={`vinyl ${isPlaying}`} >{title}</div>
      </div>
    );
  }
}

export default App;
