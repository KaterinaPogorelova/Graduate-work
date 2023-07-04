import { useState, useEffect } from 'react';
import './settings.css'
import { Switch } from '@mui/material'
import { checkMe } from '../auth';

export const Settings = () => {
	const [isAuthorized, setIsAuthorized] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')

	const label = { inputProps: { 'aria-label': 'Size switch demo' } };

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
			<h3 className='settings__title'>Profile</h3>
			<div className='settings__info-window'>
				<div className='settings__box'>
					<h5 className='box__title'>Name</h5>
					<p className='box__text'>{name}</p>
				</div>
				<div className='settings__box'>
					<h5 className='box__title'>Email</h5>
					<p className='box__text'>{email}</p>
				</div>
			</div>
		</div>}
		{isAuthorized && <div className='settings__profile-info'>
			<h3 className='settings__title'>Password</h3>
			<div className='settings__info-window'>
				<div className='settings__box'>
					<h5 className='box__title'>Password</h5>
					<input type="password" className='box__text box__input' placeholder='Your password' />
				</div>
				<div className='settings__box'>
					<h5 className='box__title'>New password</h5>
					<input type="password" className='box__text box__input' placeholder='New password' />
				</div>
				<div className='settings__box setting__box--right'>
					<h5 className='box__title'>Confirm password</h5>
					<input type="password" className='box__text box__input' placeholder='Confirm password' />
				</div>
			</div>
		</div>}
		<div className='settings__profile-info'>
			<h3 className='settings__title'>Color mode</h3>
			<div className='settings__info-window settings__theme-window'>
				<div className="settings__theme-info">
					<h5 className='box__title'>Light</h5>
					<p className='box__theme'>Use light theme</p>
				</div>
				<Switch {...label} color="secondary" />
			</div>
		</div>
		<div className='settings__btns-wrapper'>
			<button className='settings__btn'>Cancel</button>
			<button className='settings__btn settings__btn--violet'>Save</button>
		</div>
	</div>)
}