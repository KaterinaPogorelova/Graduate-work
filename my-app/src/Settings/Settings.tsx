import { useState, useEffect, useContext } from 'react';
import './settings.css'
import { Switch } from '@mui/material'
import { Passwords, changeName, changePassword, checkMe } from '../auth';
import { ChangeThemeContext, ThemeContext } from '../context';
import { useNavigate } from 'react-router-dom';

export const Settings = () => {
	const [isAuthorized, setIsAuthorized] = useState(false)
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [curPass, setCurPass] = useState('')
	const [newPass, setNewPass] = useState('')
	const [newPassconf, setNewPassConf] = useState('')
	const [passConfirmed, setPassConfirmed] = useState<boolean | null>(null)
	const [newName, setNewName] = useState('')
	const [error, setError] = useState<string[] | null>(null)
	const [namerr, setNamerr] = useState<string[] | null>(null)
	const label = { inputProps: { 'aria-label': 'Size switch demo' } };

	const changeTheme = useContext(ChangeThemeContext)
	const theme = useContext(ThemeContext)
	const navigate = useNavigate(

	)
	const confirmPassword = (pass: string, passConf: string) => {
		if (pass === passConf) {
			setPassConfirmed(true)
		} else {
			setPassConfirmed(false)
		}
	}

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
					<p className='box__text' style={theme === 'dark' ? { background: '#80858B', color: '#AFB2B6' } : { background: '#AFB2B6', color: '#fff' }}>{name}</p>
				</div>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Email</h5>
					<p className='box__text' style={theme === 'dark' ? { background: '#80858B', color: '#AFB2B6' } : { background: '#AFB2B6', color: '#fff' }}>{email}</p>
				</div>
			</div>
		</div>}
		{isAuthorized && <div className='settings__profile-info'>
			<h3 className='settings__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Change password</h3>
			<div className='settings__info-window' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff', border: '1px solid #AFB2B6' }}>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Password</h5>
					<input type="password" className={theme === 'dark' ? 'box__input input--dark' : 'box__input input--light'} value={curPass} placeholder='Your password'
						onChange={(e) => setCurPass(e.target.value)} />
					{error && <div style={{ marginTop: '5px' }}>
						{error.map((err: string) => <p style={{ color: 'red' }} key={err.slice((err.length - 5), 4)}>{err}</p>)}
					</div>}
				</div>
				<div className='settings__box'>
					<div style={{ marginBottom: '25px' }}>
						<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>New password</h5>
						<input type="password" className={theme === 'dark' ? 'box__input input--dark' : 'box__input input--light'} value={newPass} placeholder='New password'
							onChange={(e) => {
								setNewPass(e.target.value)
								confirmPassword(e.target.value, newPassconf)
							}} />
					</div>
					<div>
						<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Confirm password</h5>
						<input type="password" className={theme === 'dark' ? 'box__input input--dark' : 'box__input input--light'} value={newPassconf} placeholder='Confirm password'
							onChange={(e) => {
								setNewPassConf(e.target.value)
								confirmPassword(newPass, e.target.value)
							}} />
						<p style={{ color: 'red', opacity: passConfirmed !== false ? '0' : '1' }}>Passwords must match</p>
						<p style={{ color: 'red', opacity: curPass === newPass && curPass !== '' ? '1' : '0' }}>Passwords can't be the same</p>
					</div>
				</div>
			</div>

		</div>}
		{isAuthorized && <div className='settings__profile-info'>
			<h3 className='settings__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Change Username</h3>
			<div className='settings__info-window' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff', border: '1px solid #AFB2B6' }}>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>New username</h5>
					<input type="text" className={theme === 'dark' ? 'box__input input--dark' : 'box__input input--light'} value={newName} placeholder='Your new username'
						onChange={(e) => setNewName(e.target.value)} />
					{namerr && <div style={{ marginTop: '5px' }}>
						{namerr.map((err: string) => <p style={{ color: 'red' }} key={err.slice((err.length - 5), 4)}>{err}</p>)}
					</div>}
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
				<Switch {...label} color="secondary" defaultChecked={theme === 'light' ? true : false} onClick={() => changeTheme()} />
			</div>
		</div>
		<div className='settings__btns-wrapper'>
			<button className={theme === 'dark' ? 'main-btn--dark settings__btn' : 'main-btn--light settings__btn'} onClick={() => {
				setCurPass('')
				setNewPass('')
				setNewPassConf('')
			}}>Cancel</button>
			<button className='settings__btn main-btn--confirm' onClick={() => {
				if (passConfirmed && curPass !== '' && newPass !== '') {
					changePassword({ new_password: newPass, current_password: curPass }).then((data) => {
						if (data && data.current_password && typeof data.current_password !== 'string') {
							setError(data.current_password)
						} else if (data && data.new_password && typeof data.new_password !== 'string') {
							setError(data.new_password)
						} else {
							setError(null)
							navigate('/auth')
						}
					})
				} else if (newName !== '') {
					changeName(newName).then((data) => {
						if (data && data.username && typeof data.username !== 'string') {
							setNamerr(data.username)
						} else {
							setNamerr(null)
							navigate('/auth')
						}
					})
				} else {
					navigate('/')
				}
			}}>Save</button>
		</div>
	</div>)
}