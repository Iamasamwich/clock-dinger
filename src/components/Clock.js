import React, {useState, useEffect} from 'react';

const Clock = ({dinger}) => {

  const [hours, setHours] = useState(null);
  const [mins, setMins] = useState(null);
  const [secs, setSecs] = useState(null);

  useEffect(() => {
    const time = new Date();
    setHours(twoDigits(time.getHours()));
    setMins(twoDigits(time.getMinutes()));
    setSecs(twoDigits(time.getSeconds()));

    const clock = (setInterval(() => {
      const time = new Date();
      setHours(twoDigits(time.getHours()));
      setMins(twoDigits(time.getMinutes()));
      setSecs(twoDigits(time.getSeconds()));
    }, 1000));
    
    return () => clearTimeout(clock);
  }, []);

  useEffect(() => {
    if (dinger === 'noDing') {
      return;
    } else {
      const ding = new Audio('./sounds/bell.mp3');
      if ((Number(mins) % Number(dinger) === 0) && (Number(secs) === 0)) {
        ding.play();
      };
    };
  }, [mins, secs, dinger])

  const twoDigits = (num) => {
    return num < 10 ? '0' + num : '' + num;
  }

  return (
    <div id="clock">
      <h1>{hours}:{mins}:{secs}</h1>
    </div>
  );
};

export default Clock;