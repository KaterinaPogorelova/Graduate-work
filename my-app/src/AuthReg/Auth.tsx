import { Link, useNavigate } from 'react-router-dom'
import './authReg.css'
import { getTokens } from '../auth'
import { useState } from 'react'

export const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const navigate = useNavigate()

	return (<div className="auth__container">
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<form className='auth__wrapper'>
				<h3 className='auth__title'>Sign In</h3>
				<div className='auth__input-wrapper'>
					<label htmlFor='email' className='auth__input-label'>Email</label>
					<input type='email' name='email' className='auth__input' placeholder='Your email' required onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='password' className='auth__input-label'>Password</label>
					<input type='password' name='password' className='auth__input' placeholder='Your password' required onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<p style={{ color: 'red', opacity: error ? '1' : '0', margin: '0 auto 10px' }}>No active account found with the given credentials</p>
				<button type='submit' className='auth__button' onClick={(e) => {
					e.preventDefault()
					getTokens({ email, password }).then((tokens) => {
						if (tokens.access) {
							setError(false)
							localStorage.setItem('accessToken', tokens.access)
							localStorage.setItem('refreshToken', tokens.refresh)
							navigate('/')
						} else {
							setError(true)
						}
					})
				}}>Sign In</button>
				<div className='auth__text-wrapper'>
					<p className='auth__text'>Don’t have an account?</p>
					<Link to='/reg' className='auth__link'>Sign Up</Link>
				</div>
			</form>
		</div>
	</div >)
}