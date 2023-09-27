import './authReg.css'
import { useContext } from 'react'
import { ThemeContext } from '../context'

export const RegRedirect = () => {
	const theme = useContext(ThemeContext)
	return (<div className="auth__container" style={theme === 'dark' ? { background: '#000' } : { background: '#fff' }}>
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<div className='auth__wrapper' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff' }}>
				<h3 className='auth__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Success!</h3>
				<p className='auth__text' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>You need to activate your account. Plese check your email.</p>
				<h3 className='auth__subtitle' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Attention:</h3>
				<p className='auth__text' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>For succesful activation, pls copy everything after 'https://studapi.teachmeskills.by' (info in letter) and paste it after 'https://elaborate-tulumba-0e636e.netlify.app'</p>
			</div>
		</div>
	</div>)
}