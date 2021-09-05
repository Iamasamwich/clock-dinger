import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

const root = document.querySelector('#root');

if (!document.fullscreenElement) {
  root.requestFullscreen().catch(err => {
  });
} else {
  document.exitFullscreen();
}

ReactDOM.render(<App />, document.querySelector('#root'));