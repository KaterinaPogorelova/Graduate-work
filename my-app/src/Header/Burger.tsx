import './header.css'
import { ReactComponent as Bars } from './bars.svg'

export const Burger = () => {
	return (<button className='header__burger'>
		<Bars></Bars>
	</button>)
} 