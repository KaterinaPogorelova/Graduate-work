import './card.css'
import { Movie, getMovieGenres } from '../getMovies'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Flame } from './Flame.svg'
import { ReactComponent as NotFound } from '../FullScreenMovie/image-not-found-icon.svg'

type Card = {
	cardinfo: Movie;
	isTrends?: boolean;
}

export const Card = ({ cardinfo, isTrends }: Card) => {
	const [genres, setGenres] = useState<string[]>([])
	useEffect(() => { getMovieGenres(cardinfo.id).then((data) => setGenres(data)) }, [])
	return (

		<Link to={'/' + String(cardinfo.id)} className='main__item'>
			<div className={cardinfo.poster_path ? 'item__img-wrapper' : 'item__img-wrapper item__img-wrapper--empty'}>
				{cardinfo.poster_path && <img src={'https://image.tmdb.org/t/p/w342' + cardinfo.poster_path} alt={cardinfo.title} />}
				{!cardinfo.poster_path && <NotFound />}
				{!cardinfo.poster_path && <p>Not Found</p>}
			</div>
			<p className={isTrends ? 'item__rating item__rating--trend' : 'item__rating'}>{isTrends && <Flame />}{cardinfo.vote_average}</p>
			<div><h3 className='item__title'>{cardinfo.title}</h3>
				<ul className='item__genres'>
					{genres.map((genre) => <li key={genre} className='item__genre'>{genre}</li>)}
				</ul></div>
		</Link>

	)
}