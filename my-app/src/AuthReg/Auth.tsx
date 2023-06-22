import { Link } from 'react-router-dom'
import './authReg.css'

export const Auth = () => {
	return (<div className="auth__container">
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<form className='auth__wrapper'>
				<h3 className='auth__title'>Sign In</h3>
				<div className='auth__input-wrapper'>
					<label htmlFor='email' className='auth__input-label'>Email</label>
					<input type='email' name='email' className='auth__input' placeholder='Your email' required></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='password' className='auth__input-label'>Password</label>
					<input type='password' name='password' className='auth__input' placeholder='Your password' required></input>
				</div>
				<button type='submit' className='auth__button' onClick={(e) => {
					e.preventDefault()
				}}>Sign In</button>
				<div className='auth__text-wrapper'>
					<p className='auth__text'>Don’t have an account?</p>
					<Link to='/reg' className='auth__link'>Sign Up</Link>
				</div>
			</form>
		</div>
	</div>)
}