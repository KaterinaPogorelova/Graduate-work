import { useState, useEffect, useContext } from 'react';
import './settings.css'
import { Switch } from '@mui/material'
import { checkMe } from '../auth';
import { ChangeThemeContext, ThemeContext } from '../context';

export const Settings = () => {
	const [isAuthorized, setIsAuthorized] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const label = { inputProps: { 'aria-label': 'Size switch demo' } };

	const changeTheme = useContext(ChangeThemeContext)
	const theme = useContext(ThemeContext)

	useEffect(() => {
		checkMe().then((me) => {
			if (me) {
				setIsAuthorized(true)
				setName(me.username)
				setEmail(me.email)
			}
		})
	}, [])

	return (<div className='settings'>
		{isAuthorized && <div className='settings__profile-info'>
			<h3 className='settings__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Profile</h3>
			<div className='settings__info-window' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff', border: '1px solid #AFB2B6' }}>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Name</h5>
					<p className='box__text' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}>{name}</p>
				</div>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Email</h5>
					<p className='box__text' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}>{email}</p>
				</div>
			</div>
		</div>}
		{isAuthorized && <div className='settings__profile-info'>
			<h3 className='settings__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Password</h3>
			<div className='settings__info-window' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff', border: '1px solid #AFB2B6' }}>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Password</h5>
					<input type="password" className='box__text box__input' placeholder='Your password' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} />
				</div>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>New password</h5>
					<input type="password" className='box__text box__input' placeholder='New password' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} />
				</div>
				<div className='settings__box setting__box--right'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Confirm password</h5>
					<input type="password" className='box__text box__input' placeholder='Confirm password' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} />
				</div>
			</div>
		</div>}
		<div className='settings__profile-info'>
			<h3 className='settings__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Color mode</h3>
			<div className='settings__info-window settings__theme-window' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff', border: '1px solid #AFB2B6' }}>
				<div className="settings__theme-info">
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Light</h5>
					<p className='box__theme'>Use light theme</p>
				</div>
				<Switch {...label} color="secondary" defaultChecked={theme === 'light' ? true : false} />
			</div>
		</div>
		<div className='settings__btns-wrapper'>
			<button className='settings__btn' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}>Cancel</button>
			<button className='settings__btn settings__btn--violet' onClick={changeTheme}>Save</button>
		</div>
	</div>)
}