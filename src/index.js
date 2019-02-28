import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import audioUri from './tct_mashup.mp3'

const data = {
    audioUri: audioUri,
    title: "TCT",
    audioTrack: new Audio(audioUri)
}

ReactDOM.render(<App data={data} />, document.getElementById('root'));
serviceWorker.unregister();
