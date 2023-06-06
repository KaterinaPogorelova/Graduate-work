import './selectedUser.css'
import { ReactComponent as Down } from './arrow-down.svg'
export const SelectedUser = () => {
	return (<div className='header__selectedUser'>
		<div className='selectedUser__icon'>
			<p className='selectedUser__initials'>AL</p>
		</div>
		<p className='selectedUser__user-name'>Artem Lapitsky</p>
		<Down></Down>
	</div>)
}