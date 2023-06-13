import React from 'react';
import './App.css';
import { Main } from './Main/Main';
import { FullScreenMovie } from './FullScreenMovie/FullScreenMovie';
import { Header } from './Header/Header';
import { Navigation } from './Navigation/Navigation';

export const App = () => {
  return (<div className='container'>
    <Header></Header>
    <FullScreenMovie></FullScreenMovie>
    {/* <Navigation></Navigation> */}
  </div>)
}