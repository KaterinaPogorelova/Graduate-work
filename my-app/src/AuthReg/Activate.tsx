import { Link, useParams } from 'react-router-dom'
import './authReg.css'
import { useEffect, useState } from 'react'
import { activateUser } from '../auth'

export const Activate = () => {
	const [isActivated, setisActivated] = useState<boolean | null>(null)
	const { uid, token } = useParams()
	useEffect(() => {
		uid && token && activateUser({ uid: uid, token: token }).then((keys) => {
			if (keys.uid) {
				setisActivated(true)
			} else {
				setisActivated(false)
			}
		})
	}, [uid, token])
	return (<div className="auth__container">
		<div className='auth__background-container'>
			<div className='auth__background-gradient'></div>
			<div className='auth__wrapper'>
				<h3 className='auth__title'>{isActivated ? 'Success!' : 'Fail...'}</h3>
				<p className='auth__text'>{isActivated ? 'You succesfully activated your account' : 'Something is wrong,probably your account is already activated'}</p>
				<Link to='/auth' className='auth__button--link'>Back to Login</Link>
			</div>
		</div>
	</div>)
}