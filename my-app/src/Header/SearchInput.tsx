import './header.css'
import { ReactComponent as Filter } from './filter.svg'

export const SearchInput = () => {
	return (
		<div className='header__searchInput-wrapper'>
			<input className='header__searchInput' type='search' placeholder='Search' name='Search'>
			</input>
			<Filter></Filter>
		</div>)
}