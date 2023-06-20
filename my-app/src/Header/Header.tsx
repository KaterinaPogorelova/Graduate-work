import './header.css'
import { SearchInput } from './SearchInput'
import { ReactComponent as Logo } from './pixema.svg';
import { ReactComponent as Logo1 } from './pix.svg'
import { ReactComponent as Logo2 } from './ema.svg'
import { SelectedUser } from '../SelectedUser/SelectedUser';
import { Burger } from './Burger';
import { Filter } from '../Filter/Filter';
import { useState } from 'react';

type HeaderProps = {
	showMenu: () => void,
	handleSearch: (searchInputValue: string) => void
}

export const Header = ({ showMenu, handleSearch }: HeaderProps) => {
	const [filterShown, setFilterShown] = useState(false)

	return (
		<>
			<Filter isVisible={filterShown} closeFilter={() => setFilterShown(false)}></Filter>
			<header className="header">
				<div className="header__container">
					<div className="header__logo-wrapper">
						<Logo1 />
						<Logo2 />
					</div>
					<SearchInput showFilter={() => setFilterShown(true)} handleSearch={handleSearch}></SearchInput>
					<SelectedUser></SelectedUser>
					<Burger showMenu={showMenu}></Burger>
				</div>
			</header></>)
}