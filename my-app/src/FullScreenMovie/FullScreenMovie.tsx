import { Menu } from '../Menu/Menu'
import './fullScreenMovie.css'
import { ReactComponent as Favs } from './Favs.svg'
import { ReactComponent as Share } from './Share.svg'
import { ReactComponent as IMDb } from './IMDb.svg'
import { Recomendations } from '../Recomendations/Recomendations'

export const FullScreenMovie = () => {
	return (<div className='fullScreen__content--wrapper'>
		<Menu></Menu>
		<div className='fullScreen'>
			<div className="fullScreen__mobile--view">
				<ul className='fullScreen__genres'>
					<li className='fullScreen__genre'>Action</li>
					<li className='fullScreen__genre'>Adventure</li>
					<li className='fullScreen__genre'>Horror</li>
				</ul>
				<h1 className='fullScreen__title'>Sick</h1>
				<div className='fullScreen__rating-wrapper'>
					<p className='fullScreen__rating'>7.6</p>
					<div className='fullScreen__IMDb-rating'>
						<IMDb />
						<p className='IMDb-rating__text'>7.6</p>
					</div>
					<p className='fullScreen__duration'>130 min</p>
				</div>
			</div>
			<div className='fullScreen__img-btns-wrapper'>
				<div className='fullScreen__img-wrapper'>
					<img className='fullScreen__img' src="https://roost.nbcuni.com/bin/viewasset.html/content/dam/Peacock/Landing-Pages/originals/sick/sick-art.jpg/_jcr_content/renditions/original.JPEG" alt="movie-img" />
				</div>
				<div className='fullScreen__btns-wrapper'>
					<button className='fullScreen__btn fullScreen__btn--favs'>
						<Favs />
					</button>
					<button className='fullScreen__btn fullScreen__btn--share'>
						<Share />
					</button>
				</div>
			</div>
			<div className='fullScreen__info-wrapper'>
				<div className="fullScreen__not-mobile--view">
					<ul className='fullScreen__genres'>
						<li className='fullScreen__genre'>Action</li>
						<li className='fullScreen__genre'>Adventure</li>
						<li className='fullScreen__genre'>Horror</li>
					</ul>
					<h1 className='fullScreen__title'>Sick</h1>
					<div className='fullScreen__rating-wrapper'>
						<p className='fullScreen__rating'>7.6</p>
						<div className='fullScreen__IMDb-rating'>
							<IMDb />
							<p className='IMDb-rating__text'>7.6</p>
						</div>
						<p className='fullScreen__duration'>130 min</p>
					</div>
				</div>
				<p className='fullScreen__desc'>
					In 1984, after saving the world in Wonder Woman (2017), the immortal Amazon warrior, Princess Diana of Themyscira, finds herself trying to stay under the radar, working as an archaeologist at the Smithsonian Museum. With the memory of the brave U.S. pilot, Captain Steve Trevor, etched on her mind, Diana Prince becomes embroiled in a sinister conspiracy of global proportions when a transparent, golden-yellow citrine gemstone catches the eye of the power-hungry entrepreneur, Maxwell Lord.
				</p>
				<div className='fullScreen__props'>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Year</p>
						<p className='fullScreen__prop-desc'>2011</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Released</p>
						<p className='fullScreen__prop-desc'>15 Jul 2011</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>BoxOffice</p>
						<p className='fullScreen__prop-desc'>$381,409,310</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Country</p>
						<p className='fullScreen__prop-desc'>United Kingdom, United States</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Production</p>
						<p className='fullScreen__prop-desc'>2011</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Actors</p>
						<p className='fullScreen__prop-desc'>2011</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Director</p>
						<p className='fullScreen__prop-desc'>2011</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Writers</p>
						<p className='fullScreen__prop-desc'>2011</p>
					</div>
				</div>
				<Recomendations></Recomendations>
			</div>
		</div>
	</div>)
}