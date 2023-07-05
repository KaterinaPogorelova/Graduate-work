import './selectedUser.css'
import { ReactComponent as Down } from './arrow-down.svg';
import { ReactComponent as Right } from './arrow-right.svg';
import { ReactComponent as User } from './User.svg';
import { useEffect, useState, useContext } from 'react';
import { ThemeContext } from '../context';
import { Link } from 'react-router-dom';
import { checkMe } from '../auth';

export const SelectedUser = () => {
	const [user, setUser] = useState<string | null>(null)
	const [opened, setOpened] = useState(false)
	useEffect(() => { checkMe().then((me) => me && setUser(me.username)) }, [])
	const theme = useContext(ThemeContext)
	return (<div className='header__selectedUser-wrapper'>
		<div className='header__selectedUser'>
			<div className='selectedUser__icon'>
				{user ? <p className='selectedUser__initials'>{user[0].toUpperCase()}</p> : <User></User>}
			</div>
			{user ? <p className='selectedUser__user-name' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{user}</p> : <Link to='/auth' className='selectedUser__user-name' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Sign In</Link>}
			{user && <button className='selectedUser__switch-btn' onClick={() => setOpened(!opened)}>{opened ? <Down></Down> : <Right></Right>}</button>}
		</div>
		{user && <div className="header__change-wrapper" style={opened ? { display: 'block' } : { display: 'none' }}>
			<Link to='/settings' className='header__change-btn' onClick={() => setOpened(false)} style={theme === 'dark' ? { color: '#fff', background: '#323537' } : { color: '#000', background: '#fff' }}>Edit profile</Link>
			<Link to='/auth' className='header__change-btn header__change-btn--violet' onClick={() => {
				localStorage.clear()
				setOpened(false)
			}} style={theme === 'dark' ? { background: '#323537' } : { background: '#fff' }}>Log out</Link>
		</div>}
	</div>)
}