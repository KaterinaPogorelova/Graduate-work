import './header.css'
import { SearchInput } from './SearchInput'
import { ReactComponent as Logo } from './pixema.svg';
import { ReactComponent as Logo1 } from './pix.svg'
import { ReactComponent as Logo2 } from './ema.svg'
import { ReactComponent as Filter } from './filter.svg'
import { SelectedUser } from '../SelectedUser/SelectedUser';
import { Burger } from './Burger';
export const Header = () => {
	return (<header className="header">
		<div className="header__container">
			<div className="header__logo-wrapper">
				<Logo1 />
				<Logo2 />
			</div>
			<SearchInput></SearchInput>
			<SelectedUser></SelectedUser>
			<Burger></Burger>
		</div>
	</header>)
}