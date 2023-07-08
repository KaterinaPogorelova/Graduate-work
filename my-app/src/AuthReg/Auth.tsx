import { Link, useNavigate } from 'react-router-dom'
import './authReg.css'
import { getTokens } from '../auth'
import { useState, useContext } from 'react'
import { ThemeContext } from '../context'

export const Auth = () => {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [error, setError] = useState(false)

	const navigate = useNavigate()
	const theme = useContext(ThemeContext)

	return (<div className="auth__container" style={theme === 'dark' ? { background: '#000' } : { background: '#fff' }}>
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<form className='auth__wrapper' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff' }}>
				<h3 className='auth__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Sign In</h3>
				<div className='auth__input-wrapper'>
					<label htmlFor='email' className='auth__input-label' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Email</label>
					<input type='email' name='email' className='auth__input' style={theme === 'dark' ? { background: '#323537', border: 'none', color: '#fff' } : { background: '#fff', border: '1px solid #AFB2B6', color: '#000' }} placeholder='Your email' required onChange={(e) => setEmail(e.target.value)}></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='password' className='auth__input-label' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Password</label>
					<input type='password' name='password' className='auth__input' style={theme === 'dark' ? { background: '#323537', border: 'none', color: '#fff' } : { background: '#fff', border: '1px solid #AFB2B6', color: '#000' }} placeholder='Your password' required onChange={(e) => setPassword(e.target.value)}></input>
				</div>
				<p style={{ color: 'red', opacity: error ? '1' : '0', marginBottom: '10px' }}>No active account found with the given credentials</p>
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
					<p className='auth__text' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Don’t have an account?</p>
					<Link to='/reg' className='auth__link'>Sign Up</Link>
				</div>
			</form>
		</div>
	</div >)
}