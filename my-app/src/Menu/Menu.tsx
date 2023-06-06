import './menu.css'
import { ReactComponent as Home } from './Home.svg'
import { ReactComponent as Trends } from './Trends.svg'
import { ReactComponent as Favourites } from './Favourites.svg'
import { ReactComponent as Settings } from './Settings.svg'

export const Menu = () => {
	return (<div className='side--content'><nav className='menu'>
		<a href='#'><li className='menu__item menu__item--active'>
			<div className='item__svg-wrapper'><Home /></div>
			<h3 className='menu__title'>Home</h3>
		</li></a>
		<a href='#'><li className='menu__item'>
			<div className='item__svg-wrapper'><Trends /></div>
			<h3 className='menu__title'>Trends</h3>
		</li></a>
		<a href='#'><li className='menu__item'>
			<div className='item__svg-wrapper'><Favourites /></div>
			<h3 className='menu__title'>Favourites</h3>
		</li></a>
		<a href='#'><li className='menu__item'>
			<div className='item__svg-wrapper'><Settings /></div>
			<h3 className='menu__title'>Settings</h3>
		</li></a>
	</nav>
		<p className='footer'>&copy; All Rights Reserved</p>
	</div>)
}