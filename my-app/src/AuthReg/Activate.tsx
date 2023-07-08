import { Link, useParams } from 'react-router-dom'
import './authReg.css'
import { useEffect, useState, useContext } from 'react'
import { activateUser } from '../auth'
import { ThemeContext } from '../context'

export const Activate = () => {
	const [isActivated, setisActivated] = useState<boolean | null>(null)
	const { uid, token } = useParams()
	const theme = useContext(ThemeContext)
	useEffect(() => {
		uid && token && activateUser({ uid: uid, token: token }).then((keys) => {
			if (keys.uid) {
				setisActivated(true)
			} else {
				setisActivated(false)
			}
		})
	}, [uid, token])
	return (<div className="auth__container" style={theme === 'dark' ? { background: '#000' } : { background: '#fff' }}>
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<div className='auth__wrapper' style={theme === 'dark' ? { background: '#242426' } : { background: '#fff' }}>
				<h3 className='auth__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{isActivated ? 'Success!' : 'Fail...'}</h3>
				<p className='auth__text' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{isActivated ? 'You succesfully activated your account' : 'Something is wrong,probably your account is already activated'}</p>
				<Link to='/auth' className='auth__button--link'>Back to Login</Link>
			</div>
		</div>
	</div>)
}