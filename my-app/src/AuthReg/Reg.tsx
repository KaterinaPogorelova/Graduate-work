import { Link, useNavigate } from 'react-router-dom'
import { RegRedirect } from './RegRedirect'
import './authReg.css'
import { postUser } from '../auth'
import { useState } from 'react'

export const Reg = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConf, setPasswordConf] = useState('')
	const [passConfirmed, setPassConfirmed] = useState<boolean | null>(null)

	const navigate = useNavigate()

	const confirmPassword = (pass: string, passConf: string) => {
		if (pass === passConf) {
			setPassConfirmed(true)
		} else {
			setPassConfirmed(false)
		}
	}

	return (<div className="auth__container">
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<form className='auth__wrapper'>
				<h3 className='auth__title'>Sign Up</h3>
				<div className='auth__input-wrapper'>
					<label htmlFor='fname' className='auth__input-label'>Name</label>
					<input type='text' name='fname' className='auth__input' placeholder='Your first name' required onChange={(e) => setName(e.target.value)}></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='email' className='auth__input-label'>Email</label>
					<input type='email' name='email' className='auth__input' placeholder='Your email' required onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='password' className='auth__input-label'>Password</label>
					<input type='password' name='password' className='auth__input' placeholder='Your password' required onChange={(e) => {
						setPassword(e.target.value)
						confirmPassword(e.target.value, passwordConf)
					}}></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='confpassword' className='auth__input-label'>Confirm password</label>
					<input type='password' name='confpassword' className='auth__input' placeholder='Confirm password' required onChange={(e) => {
						setPasswordConf(e.target.value)
						confirmPassword(password, e.target.value)
					}}></input>
					<p style={{ color: 'red', opacity: passConfirmed !== false ? '0' : '1' }}>Passwords must match</p>
				</div>
				<button type='submit' className='auth__button' onClick={(e) => {
					e.preventDefault()
					if (passConfirmed) {
						postUser({ username: name, email, password })
						navigate('/redirect')
					} else {
						return
					}
				}}>Sign Up</button>
				<div className='auth__text-wrapper'>
					<p className='auth__text'>Already have an account?</p>
					<Link to='/auth' className='auth__link'>Sign In</Link>
				</div>
			</form>
		</div>
	</div>)
}