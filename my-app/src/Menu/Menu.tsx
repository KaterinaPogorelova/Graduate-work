import './menu.css'
import { ReactComponent as Home } from './Home.svg'
import { ReactComponent as Trends } from './Trends.svg'
import { ReactComponent as Favourites } from './Favourites.svg'
import { ReactComponent as Settings } from './Settings.svg'
import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Burger } from '../Header/Burger'
import { checkMe } from '../auth'

type MenuProps = {
	isOpenedMob?: boolean;
	showMenu: () => void
}

export const Menu = ({ isOpenedMob, showMenu }: MenuProps) => {
	const location = useLocation()
	const [opened, setOpened] = useState<boolean | undefined>(false)
	const [isAuthorized, setIsAuthorized] = useState(false)

	useEffect(() => setOpened(isOpenedMob), [isOpenedMob])
	useEffect(() => { checkMe().then((me) => me && setIsAuthorized(true)) }, [])

	return (<div className={opened ? 'side--content side--content--opened' : 'side--content'}>
		<Burger isOpened showMenu={showMenu} />
		<nav className='menu'>
			<Link to='/' onClick={() => { setOpened(false); showMenu() }}><li className={location.pathname === '/' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
				<div className='item__svg-wrapper'><Home /></div>
				<h3 className='menu__title'>Home</h3>
			</li></Link>
			<Link to='trends' onClick={() => { setOpened(false); showMenu() }}><li className={location.pathname === '/trends' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
				<div className='item__svg-wrapper'><Trends /></div>
				<h3 className='menu__title'>Trends</h3>
			</li></Link>
			{isAuthorized && <Link to='favourites' onClick={() => { setOpened(false); showMenu() }}><li className={location.pathname === '/favourites' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
				<div className='item__svg-wrapper'><Favourites /></div>
				<h3 className='menu__title'>Favourites</h3>
			</li></Link>}
			<Link to='settings' onClick={() => { setOpened(false); showMenu() }}><li className={location.pathname === '/settings' ? ('menu__item--active ' + 'menu__item') : ('menu__item')}>
				<div className='item__svg-wrapper'><Settings /></div>
				<h3 className='menu__title'>Settings</h3>
			</li></Link>
		</nav>
		<p className='footer'>&copy; All Rights Reserved</p>
	</div>)
}