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
			<input className='header__searchInput' style={theme === 'dark' ? { background: '#323537', border: 'none', color: '#fff' } : { background: '#fff', border: '1px solid #AFB2B6', color: '#000' }} type='search' placeholder='Search' name='Search' onChange={(e) => handleSearch(e.target.value)}>
			</input>
			<FilterBtn onClick={() => showFilter()}></FilterBtn>
		</div>)
}