import './header.css'
import { ReactComponent as FilterBtn } from './filter.svg'
type SearchProps = {
	showFilter: () => void
}
export const SearchInput = ({ showFilter }: SearchProps) => {
	return (
		<div className='header__searchInput-wrapper'>
			<input className='header__searchInput' type='search' placeholder='Search' name='Search'>
			</input>
			<FilterBtn onClick={() => showFilter()}></FilterBtn>
		</div>)
}