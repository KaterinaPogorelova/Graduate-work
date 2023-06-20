import './selectedUser.css'
import { ReactComponent as Down } from './arrow-down.svg';
import { ReactComponent as Right } from './arrow-right.svg';
import { ReactComponent as User } from './User.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export const SelectedUser = () => {
	const [user, setUser] = useState<string | null>(null)
	const [opened, setOpened] = useState(false)
	return (<div className='header__selectedUser-wrapper'>
		<div className='header__selectedUser'>
			<div className='selectedUser__icon'>
				{user ? <p className='selectedUser__initials'>AL</p> : <User></User>}
			</div>
			{user ? <p className='selectedUser__user-name'>{user}</p> : <Link to='/' className='selectedUser__user-name'>Sign In</Link>}
			<button className='selectedUser__switch-btn' onClick={() => setOpened(!opened)}>{opened ? <Down></Down> : <Right></Right>}</button>
		</div>
		<div className="header__change-wrapper" style={opened ? { display: 'block' } : { display: 'none' }}>
			{user && <Link to='/settings' className='header__change-btn'>Edit profile</Link>}
			<Link to='#' className='header__change-btn header__change-btn--violet'>{user ? 'Log Out' : 'Log In'}</Link>
		</div>
	</div>)
}