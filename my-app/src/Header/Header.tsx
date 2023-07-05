import './header.css'
import { SearchInput } from './SearchInput'
import { ReactComponent as Logo } from './pixema.svg';
import { ReactComponent as Logo1 } from './pix.svg'
import { ReactComponent as Logo2w } from './ema.svg'
import { ReactComponent as Logo2b } from './emab.svg'

import { SelectedUser } from '../SelectedUser/SelectedUser';
import { Burger } from './Burger';
import { Filter } from '../Filter/Filter';
import { useState, useContext } from 'react';
import { FilterParams } from '../getMovies';
import { ThemeContext } from "../context"

type HeaderProps = {
	showMenu: () => void,
	handleSearch: (searchInputValue: string) => void,
	setFilterParams: ({ sortBy, genres, releaseDateGTE, releaseDateLTE, voteGTE, voteLTE }: FilterParams) => void
}

export const Header = ({ showMenu, handleSearch, setFilterParams }: HeaderProps) => {
	const [filterShown, setFilterShown] = useState(false)
	const theme = useContext(ThemeContext)
	return (
		<>
			<Filter isVisible={filterShown} closeFilter={() => setFilterShown(false)} setFilterParams={setFilterParams}></Filter>
			<header className="header">
				<div className="header__container">
					<div className="header__logo-wrapper">
						<Logo1 />
						{theme === 'dark' ? <Logo2w /> : <Logo2b />}
					</div>
					<SearchInput showFilter={() => setFilterShown(true)} handleSearch={handleSearch}></SearchInput>
					<SelectedUser></SelectedUser>
					<Burger showMenu={showMenu}></Burger>
				</div>
			</header></>)
}