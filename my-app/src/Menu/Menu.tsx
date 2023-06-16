import './menu.css'
import { ReactComponent as Home } from './Home.svg'
import { ReactComponent as Trends } from './Trends.svg'
import { ReactComponent as Favourites } from './Favourites.svg'
import { ReactComponent as Settings } from './Settings.svg'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export const Menu = () => {
	const location = useLocation()
	return (<div className='side--content'><nav className='menu'>
		<Link to='/'><li className={location.pathname === '/' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
			<div className='item__svg-wrapper'><Home /></div>
			<h3 className='menu__title'>Home</h3>
		</li></Link>
		<Link to='trends'><li className={location.pathname === '/trends' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
			<div className='item__svg-wrapper'><Trends /></div>
			<h3 className='menu__title'>Trends</h3>
		</li></Link>
		<Link to='favourites'><li className={location.pathname === '/favourites' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
			<div className='item__svg-wrapper'><Favourites /></div>
			<h3 className='menu__title'>Favourites</h3>
		</li></Link>
		<a href='settings'><li className={location.pathname === '/settings' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
			<div className='item__svg-wrapper'><Settings /></div>
			<h3 className='menu__title'>Settings</h3>
		</li></a>
	</nav>
		<p className='footer'>&copy; All Rights Reserved</p>
	</div>)
}