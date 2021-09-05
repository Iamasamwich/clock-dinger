import React, {useState, useEffect} from 'react';
import Clock from './Clock';
import Menu from './Menu';
import '../styles/clock.css';

const App = () => {

  const [dinger, setDinger] = useState();

  useEffect(() => {
    if (window.localStorage.getItem('dinger') === null) {
      window.localStorage.setItem('dinger', 'noDing');
    };
    if (!dinger) {
      setDinger(window.localStorage.getItem('dinger'));
    } else {
      window.localStorage.setItem('dinger', dinger);
    };
  }, [dinger]);

  return (
    <>
      <Menu dinger={dinger} handleDingerChange={(period) => setDinger(period)} />
      <Clock dinger={dinger} />
    </>
  );
};

export default App;