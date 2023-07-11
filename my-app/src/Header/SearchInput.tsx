import './header.css'
import { useContext } from 'react';
import { ReactComponent as FilterBtn } from './filter.svg'
import { ThemeContext } from "../context"

type SearchProps = {
	showFilter: () => void,
	handleSearch: (searchInputValue: string) => void
}
export const SearchInput = ({ showFilter, handleSearch }: SearchProps) => {
	const theme = useContext(ThemeContext)
	return (
		<div className='header__searchInput-wrapper'>
			<input className={theme === 'dark' ? 'input--dark header__searchInput' : 'input--light header__searchInput'} type='search' placeholder='Search' name='Search' onChange={(e) => handleSearch(e.target.value)}>
			</input>
			<button className='header__filter-btn'><FilterBtn onClick={() => showFilter()}></FilterBtn></button>
		</div>)
}