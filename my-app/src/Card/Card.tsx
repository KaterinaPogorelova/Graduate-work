import './card.css'
import { Movie, getMovieGenres } from '../getMovies'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

type Card = {
	cardinfo: Movie
}

export const Card = ({ cardinfo }: Card) => {
	const [genres, setGenres] = useState<string[]>([])
	useEffect(() => { getMovieGenres(cardinfo.id).then((data) => setGenres(data)) }, [])
	return (

		<Link to={'/' + String(cardinfo.id)} className='main__item'>
			<div className='item__img-wrapper'>
				<img src={'https://image.tmdb.org/t/p/w342' + cardinfo.poster_path} alt={cardinfo.title} />
			</div>
			<p className='item__rating'>{cardinfo.vote_average}</p>
			<h3 className='item__title'>{cardinfo.title}</h3>
			<ul className='item__genres'>
				{genres.map((genre) => <li key={genre} className='item__genre'>{genre}</li>)}
			</ul>
		</Link>

	)
}