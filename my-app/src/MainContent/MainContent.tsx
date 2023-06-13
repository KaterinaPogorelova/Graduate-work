import './mainContent.css'
import { Card } from '../Card/Card'
import { SortingIcons } from '../SortingIcons/SortingIcon'
export const MainContent = () => {
	return (<main className='main'>
		{/* <SortingIcons /> */}
		<div className='main__item-wrapper'>
			<Card />
			<Card />
			<Card />
			<Card />
			<Card />
		</div>
		<button className='main__show-btn'>Show More</button>
	</main>)
}