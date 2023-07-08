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
					<p className='box__text' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}>{name}</p>
				</div>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Email</h5>
					<p className='box__text' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}>{email}</p>
				</div>
			</div>
		</div>}
		{isAuthorized && <div className='settings__profile-info'>
			<h3 className='settings__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Change password</h3>
			<div className='settings__info-window' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff', border: '1px solid #AFB2B6' }}>
				<div className='settings__box'>
					<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Password</h5>
					<input type="password" className='box__text box__input' value={curPass} placeholder='Your password' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}
						onChange={(e) => setCurPass(e.target.value)} />
					{error && <div style={{ marginTop: '5px' }}>
						{error.map((err: string) => <p style={{ color: 'red' }} key={err.slice((err.length - 5), 4)}>{err}</p>)}
					</div>}
				</div>
				<div className='settings__box'>
					<div style={{ marginBottom: '25px' }}>
						<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>New password</h5>
						<input type="password" className='box__text box__input' value={newPass} placeholder='New password' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}
							onChange={(e) => {
								setNewPass(e.target.value)
								confirmPassword(e.target.value, newPassconf)
							}} />
					</div>
					<div>
						<h5 className='box__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Confirm password</h5>
						<input type="password" className='box__text box__input' value={newPassconf} placeholder='Confirm password' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}
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
					<input type="text" className='box__text box__input' value={newName} placeholder='Your new username' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}
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
			<button className='settings__btn' style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} onClick={() => {
				setCurPass('')
				setNewPass('')
				setNewPassConf('')
			}}>Cancel</button>
			<button className='settings__btn settings__btn--violet' onClick={() => {
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