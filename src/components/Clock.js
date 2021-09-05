import React, {useState, useEffect} from 'react';

const Clock = () => {

  const [hours, setHours] = useState(null);
  const [mins, setMins] = useState(null);
  const [secs, setSecs] = useState(null);

  useEffect(() => {
    const time = new Date();
    setHours(twoDigits(time.getHours(), 'hrs'));
    setMins(twoDigits(time.getMinutes()));
    setSecs(twoDigits(time.getSeconds()));

    const clock = (setInterval(() => {
      const time = new Date();
      setHours(twoDigits(time.getHours(), 'hrs'));
      setMins(twoDigits(time.getMinutes()));
      setSecs(twoDigits(time.getSeconds()));
    }, 1000));
    
    return () => clearTimeout(clock);
  }, []);

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