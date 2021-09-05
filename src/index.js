import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';


if (typeof document.fullscreenElement !== undefined) {
  document.querySelector('#root').requestFullscreen();
};

ReactDOM.render(<App 
  onClick={() => {console.log('clicked')}}
/>, document.querySelector('#root'));