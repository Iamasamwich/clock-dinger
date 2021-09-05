import React, {useState} from 'react';

const Menu = ({dinger, handleDingerChange}) => {

  const [menuOpen, setMenuOpen] = useState(false);

  const dingerSelect = (time) => {
    return time === dinger ?
      'selected'
      :
      '';
  };

  const timerChange = (time) => {
    setMenuOpen(false);
    if (time === dinger) {
      return;
    } else {
      handleDingerChange(time);
    };
  };

  const renderMenu = () => {
    return (
      <div className="menuList">
        <div className={`menuItem ${dingerSelect('noDing')}`} onClick={() => timerChange('noDing')}>No ding</div>
        <div className={`menuItem ${dingerSelect('15')}`} onClick={() => timerChange('15')}>Ding every 15 minutes</div>
        <div className={`menuItem ${dingerSelect('30')}`} onClick={() => timerChange('30')}>Ding every 30 minutes</div>
        <div className={`menuItem ${dingerSelect('60')}`} onClick={() => timerChange('60')}>Ding every hour</div>
      </div>
    );
  };

  return (
    <div className='menu'>
      <div 
        className='burger'
        onClick={() => setMenuOpen(!menuOpen)}>
        {'\u2630'}
      </div>
      {menuOpen ?
        renderMenu()
        :
        null
      }
    </div>
  )
};

export default Menu;