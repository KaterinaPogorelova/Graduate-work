import { Link, useNavigate } from 'react-router-dom'
import { RegRedirect } from './RegRedirect'
import './authReg.css'
import { postUser } from '../auth'
import { useState, useContext } from 'react'
import { ThemeContext } from '../context'

export const Reg = () => {
	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [passwordConf, setPasswordConf] = useState('')
	const [passConfirmed, setPassConfirmed] = useState<boolean | null>(null)
	const [errorEmail, setErrorEmail] = useState<string[] | null>(null)
	const [errorPass, setErrorPass] = useState<string[] | null>(null)

	const navigate = useNavigate()
	const theme = useContext(ThemeContext)
	const confirmPassword = (pass: string, passConf: string) => {
		if (pass === passConf) {
			setPassConfirmed(true)
		} else {
			setPassConfirmed(false)
		}
	}

	return (<div className="auth__container" style={theme === 'dark' ? { background: '#000' } : { background: '#fff' }}>
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<form className='auth__wrapper' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff' }}>
				<h3 className='auth__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Sign Up</h3>
				<div className='auth__input-wrapper'>
					<label htmlFor='fname' className='auth__input-label' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Name</label>
					<input type='text' name='fname' className='auth__input' style={theme === 'dark' ? { background: '#323537', border: 'none', color: '#fff' } : { background: '#fff', border: '1px solid #AFB2B6', color: '#000' }} placeholder='Your first name' required onChange={(e) => setName(e.target.value)}></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='email' className='auth__input-label' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Email</label>
					<input type='email' name='email' className='auth__input' style={theme === 'dark' ? { background: '#323537', border: 'none', color: '#fff' } : { background: '#fff', border: '1px solid #AFB2B6', color: '#000' }} placeholder='Your email' required onChange={(e) => setEmail(e.target.value)}></input>
					{errorEmail && errorEmail.map((err: string) => <p style={{ color: 'red', marginTop: '5px' }} key={errorEmail.indexOf(err)}>{err}</p>)}
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='password' className='auth__input-label' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Password</label>
					<input type='password' name='password' className='auth__input' style={theme === 'dark' ? { background: '#323537', border: 'none', color: '#fff' } : { background: '#fff', border: '1px solid #AFB2B6', color: '#000' }} placeholder='Your password' required onChange={(e) => {
						setPassword(e.target.value)
						confirmPassword(e.target.value, passwordConf)
					}}></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='confpassword' className='auth__input-label' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Confirm password</label>
					<input type='password' name='confpassword' className='auth__input' style={theme === 'dark' ? { background: '#323537', border: 'none', color: '#fff' } : { background: '#fff', border: '1px solid #AFB2B6', color: '#000' }} placeholder='Confirm password' required onChange={(e) => {
						setPasswordConf(e.target.value)
						confirmPassword(password, e.target.value)
					}}></input>
					<p style={{ color: 'red', opacity: passConfirmed !== false ? '0' : '1' }}>Passwords must match</p>
					{errorPass && errorPass.map((err: string) => <p style={{ color: 'red' }} key={errorPass.indexOf(err)}>{err}</p>)}
				</div>
				<button type='submit' className='auth__button' onClick={(e) => {
					e.preventDefault()
					if (passConfirmed) {
						postUser({ username: name, email, password }).then((data) => {
							if (data && data.email && typeof data.email !== 'string') {
								setErrorPass(null)
								setErrorEmail(data.email)
							} else if (data && data.password && typeof data.password !== 'string') {
								setErrorEmail(null)
								setErrorPass(data.password)
							} else {
								setErrorEmail(null)
								setErrorPass(null)
								navigate('/redirect')
							}
						})
					} else {
						return
					}
				}}>Sign Up</button>
				<div className='auth__text-wrapper'>
					<p className='auth__text' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Already have an account?</p>
					<Link to='/auth' className='auth__link'>Sign In</Link>
				</div>
			</form>
		</div>
	</div>)
}