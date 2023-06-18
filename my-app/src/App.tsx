import React, { useState } from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { Menu } from './Menu/Menu';

export const App = () => {
  const [menuOpened, setMenuOpened] = useState(false)

  const showMenu = () => {
    setMenuOpened(!menuOpened)
  }

  return (<div className='container'>
    <Header showMenu={showMenu}></Header>
    <div className='content--wrapper'>
      <Menu isOpenedMob={menuOpened} showMenu={showMenu}></Menu>
      <Navigation></Navigation>
    </div>
  </div>)
}