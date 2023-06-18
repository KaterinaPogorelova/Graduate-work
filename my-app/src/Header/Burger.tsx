import './header.css'
import { ReactComponent as Bars } from './bars.svg'
import { ReactComponent as Cross } from './Close.svg'

type BurgerProps = {
	isOpened?: boolean,
	showMenu: () => void
}

export const Burger = ({ isOpened, showMenu }: BurgerProps) => {
	return (<button className='header__burger' onClick={() => showMenu()}>
		{isOpened ? <Cross /> : <Bars />}
	</button>)
} 