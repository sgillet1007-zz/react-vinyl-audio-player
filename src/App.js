import React, { useState } from 'react';
import './App.css';

const App = props => {
  const [playing, setPlaying] = useState(false);
  const {title, audioTrack} = props.data;
  const isPlaying = playing ? 'spinning' : ''
  const handleClick = (e) => {
    if(!playing){
      setPlaying(true);
      audioTrack.play();
    } else if(playing){
      audioTrack.pause();
      setPlaying(false);
    }
  }

    return (
      <div onClick={handleClick} className="vinyl-wrapper">
        <div className={`vinyl ${isPlaying}`} >{title}</div>
      </div>
    );
}

export default App;
