import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Tabs.scss';

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('all')
  const history = useHistory();

  const onTabClick = ({ currentTarget }) => {
    const { dataset } = currentTarget;
    const { tabname } = dataset;
    const searchParams = `?posts=${tabname}`;
    setActiveTab(tabname)
    history.push({ search: searchParams });
  }

  return (
    <ul className='tabs'>
      <li data-tabname='all' onClick={onTabClick /* handleAllPosts */} className={`tabs__tab ${activeTab === 'all' ? 'tabs__tab--active' : ''}`}>All</li>
      <li data-tabname='favs' onClick={onTabClick /* handleFavPosts */} className={`tabs__tab ${activeTab === 'favs' ? 'tabs__tab--active' : ''}`}>Favs only</li>
    </ul>
  )
}

export default Tabs;