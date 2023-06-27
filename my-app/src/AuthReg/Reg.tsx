import { Link } from 'react-router-dom'
import './authReg.css'

export const Reg = () => {
	return (<div className="auth__container">
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<form className='auth__wrapper'>
				<h3 className='auth__title'>Sign Up</h3>
				<div className='auth__input-wrapper'>
					<label htmlFor='fname' className='auth__input-label'>First name</label>
					<input type='text' name='fname' className='auth__input' placeholder='Your first name' required></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='lname' className='auth__input-label'>Last name</label>
					<input type='text' name='lname' className='auth__input' placeholder='Your last name' required></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='email' className='auth__input-label'>Email</label>
					<input type='email' name='email' className='auth__input' placeholder='Your email' required></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='password' className='auth__input-label'>Password</label>
					<input type='password' name='password' className='auth__input' placeholder='Your password' required></input>
				</div>
				<div className='auth__input-wrapper'>
					<label htmlFor='confpassword' className='auth__input-label'>Confirm password</label>
					<input type='password' name='confpassword' className='auth__input' placeholder='Confirm password' required></input>
				</div>
				<button type='submit' className='auth__button' onClick={(e) => {
					e.preventDefault()
				}}>Sign Up</button>
				<div className='auth__text-wrapper'>
					<p className='auth__text'>Already have an account?</p>
					<Link to='/auth' className='auth__link'>Sign In</Link>
				</div>
			</form>
		</div>
	</div>)
}