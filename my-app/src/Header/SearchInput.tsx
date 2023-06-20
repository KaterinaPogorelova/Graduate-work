import './header.css'
import { ReactComponent as FilterBtn } from './filter.svg'
type SearchProps = {
	showFilter: () => void,
	handleSearch: (searchInputValue: string) => void
}
export const SearchInput = ({ showFilter, handleSearch }: SearchProps) => {
	return (
		<div className='header__searchInput-wrapper'>
			<input className='header__searchInput' type='search' placeholder='Search' name='Search' onChange={(e) => handleSearch(e.target.value)}>
			</input>
			<FilterBtn onClick={() => showFilter()}></FilterBtn>
		</div>)
}