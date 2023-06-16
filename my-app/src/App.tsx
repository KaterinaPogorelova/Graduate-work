import React from 'react';
import './App.css';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';
import { Menu } from './Menu/Menu';

export const App = () => {
  return (<div className='container'>
    <Header></Header>
    <div className='content--wrapper'>
      <Menu></Menu>
      <Navigation></Navigation>
    </div>
  </div>)
}