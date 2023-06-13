import './recomendations.css'
import { Card } from '../Card/Card'
export const Recomendations = () => {
	return (<div className='recomendations'>
		<h2 className='recomendations__title'>Recomendations</h2>
		<div className='recomendations__item-wrapper'>
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
	</div>)
}