import './sortingIcons.css'
import { ReactComponent as Cross } from './cross.svg'

export const SortingIcons = () => {
	return (<ul className='sorting__icons'>
		<li className='sorting__icon'><p className='icon__text'>Drama </p><Cross /></li>
		<li className='sorting__icon'><p className='icon__text'>Horror</p><Cross /></li>
		<li className='sorting__icon'><p className='icon__text'>Adventure</p><Cross /></li>
		<li className='sorting__icon'><p className='icon__text'>Thriller</p><Cross /></li>
		<li className='sorting__icon'><p className='icon__text'>Comedy</p><Cross /></li>
	</ul>)
}