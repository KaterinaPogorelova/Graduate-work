import './card.css'
import { Movie, getMovieGenres } from '../getMovies'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Flame } from './Flame.svg'

type Card = {
	cardinfo: Movie;
	isTrends?: boolean;
}

export const Card = ({ cardinfo, isTrends }: Card) => {
	const [genres, setGenres] = useState<string[]>([])
	useEffect(() => { getMovieGenres(cardinfo.id).then((data) => setGenres(data)) }, [])
	return (

		<Link to={'/' + String(cardinfo.id)} className='main__item'>
			<div className='item__img-wrapper'>
				<img src={'https://image.tmdb.org/t/p/w342' + cardinfo.poster_path} alt={cardinfo.title} />
			</div>
			<p className={isTrends ? 'item__rating item__rating--trend' : 'item__rating'}>{isTrends && <Flame />}{cardinfo.vote_average}</p>
			<h3 className='item__title'>{cardinfo.title}</h3>
			<ul className='item__genres'>
				{genres.map((genre) => <li key={genre} className='item__genre'>{genre}</li>)}
			</ul>
		</Link>

	)
}