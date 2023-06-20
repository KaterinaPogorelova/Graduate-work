import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { Menu } from './Menu/Menu';
import { useNavigate } from 'react-router-dom';

export const App = () => {
  const [menuOpened, setMenuOpened] = useState(false)
  const [searchInputValue, setSearchInputValue] = useState('')
  const navigate = useNavigate()
  const getSearchValue = (searchInputValue: string) => {
    setSearchInputValue(searchInputValue)
  }

  const showMenu = () => {
    setMenuOpened(!menuOpened)
  }

  useEffect(() => {
    if (searchInputValue) {
      navigate('/search')
    } else {
      return
    }
  }, [searchInputValue])

  return (<div className='container'>
    <Header showMenu={showMenu} handleSearch={getSearchValue}></Header>
    <div className='content--wrapper'>
      <Menu isOpenedMob={menuOpened} showMenu={showMenu}></Menu>
      <Navigation searchInputValue={searchInputValue}></Navigation>
    </div>
  </div>)
}