import './card.css'
export const Card = () => {
	return (
		<div className='main__item'>
			<div className='item__img-wrapper'>
				<img src="https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/originals/sick/sick-art.jpg/_jcr_content/renditions/original.JPEG" alt="movie" />
			</div>
			<p className='item__rating'>7.6</p>
			<h3 className='item__title'>Sick</h3>
			<ul className='item__genres'>
				<li className='item__genre'>Action</li>
				<li className='item__genre'>Adventure</li>
				<li className='item__genre'>Horror</li>
			</ul>
		</div>
	)
}