import React, { useState } from 'react';
import './App.css';
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