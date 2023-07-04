import './selectedUser.css'
import { ReactComponent as Down } from './arrow-down.svg';
import { ReactComponent as Right } from './arrow-right.svg';
import { ReactComponent as User } from './User.svg';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkMe } from '../auth';

export const SelectedUser = () => {
	const [user, setUser] = useState<string | null>(null)
	const [opened, setOpened] = useState(false)
	useEffect(() => { checkMe().then((me) => me && setUser(me.username)) }, [])
	return (<div className='header__selectedUser-wrapper'>
		<div className='header__selectedUser'>
			<div className='selectedUser__icon'>
				{user ? <p className='selectedUser__initials'>{user[0].toUpperCase()}</p> : <User></User>}
			</div>
			{user ? <p className='selectedUser__user-name'>{user}</p> : <Link to='/auth' className='selectedUser__user-name'>Sign In</Link>}
			{user && <button className='selectedUser__switch-btn' onClick={() => setOpened(!opened)}>{opened ? <Down></Down> : <Right></Right>}</button>}
		</div>
		{user && <div className="header__change-wrapper" style={opened ? { display: 'block' } : { display: 'none' }}>
			<Link to='/settings' className='header__change-btn' onClick={() => setOpened(false)}>Edit profile</Link>
			<Link to='/auth' className='header__change-btn header__change-btn--violet' onClick={() => {
				localStorage.clear()
				setOpened(false)
			}}>Log out</Link>
		</div>}
	</div>)
}