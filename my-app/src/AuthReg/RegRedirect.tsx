import './authReg.css'

export const RegRedirect = () => {
	return (<div className="auth__container">
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<div className='auth__wrapper'>
				<h3 className='auth__title'>Success!</h3>
				<p className='auth__text'>You need to activate your account. Plese check your email.</p>
				<h3 className='auth__subtitle'>Attention:</h3>
				<p className='auth__text'>For succesful activation, pls copy everything after 'https://studapi.teachmeskills.by' (info in letter) and paste it after 'https://elaborate-tulumba-0e636e.netlify.app'</p>
			</div>
		</div>
	</div>)
}