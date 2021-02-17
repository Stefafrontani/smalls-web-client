import React from 'react';
import './Tabs.scss';

const Tabs = () => {
  return (
    <ul className='tabs'>
      <li onClick={() => {}} className='tabs__tab tabs__tab--active'>All</li>
      <li onClick={() => {}} className='tabs__tab'>Favs only</li>
    </ul>
  )
}

export default Tabs;