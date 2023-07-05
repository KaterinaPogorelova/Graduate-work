import React, { useEffect, useState } from 'react';
import './App.css';
import { Header } from './Header/Header';
import { MainNavigation } from './MainNavigation/MainNavigation';
import { Menu } from './Menu/Menu';
import { useNavigate } from 'react-router-dom';
import { Navigation } from './Navigation/Navigation';
import { ThemeContext, ChangeThemeContext } from './context';


export const App = () => {
  const [theme, setTheme] = useState('dark')
  return (<ThemeContext.Provider value={theme}>
    <ChangeThemeContext.Provider value={() => theme === 'dark' ? setTheme('light') : setTheme('dark')}>
      <Navigation></Navigation>
    </ChangeThemeContext.Provider>
  </ThemeContext.Provider>)
}