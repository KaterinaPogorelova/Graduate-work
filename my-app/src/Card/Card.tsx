import './card.css'
import { Movie, getMovieGenres, DetailedMovie } from '../getMovies'
import { useEffect, useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Flame } from './Flame.svg'
import { ReactComponent as NotFound } from '../FullScreenMovie/image-not-found-icon.svg'
import { ReactComponent as Fav } from './Favs.svg'
import { ThemeContext } from '../context'

type CardProps = {
	cardinfo: Movie | DetailedMovie;
	isTrends?: boolean;
	favourites: DetailedMovie[]
}

export const Card = ({ cardinfo, isTrends, favourites }: CardProps) => {
	const [genres, setGenres] = useState<string[]>([])
	const theme = useContext(ThemeContext)
	useEffect(() => { getMovieGenres(cardinfo.id).then((data) => setGenres(data)) }, [])
	const isFavourite = favourites.find((favmovie) => favmovie.id === cardinfo.id)
	return (
		<Link to={'/' + String(cardinfo.id)} className='main__item'>
			<div className={cardinfo.poster_path ? 'item__img-wrapper' : 'item__img-wrapper item__img-wrapper--empty'}>
				{cardinfo.poster_path && <img src={'https://image.tmdb.org/t/p/w300' + cardinfo.poster_path} alt={cardinfo.title} />}
				{!cardinfo.poster_path && <NotFound />}
				{!cardinfo.poster_path && <p>Not Found</p>}
				{isFavourite && <div className='item__fav-wrapper'>
					<Fav />
				</div>}
			</div>
			<p className={isTrends ? 'item__rating item__rating--trend' : 'item__rating'}>{isTrends && <Flame />}{cardinfo.vote_average.toFixed(1)}</p>
			<div><h3 className='item__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{cardinfo.title}</h3>
				<ul className='item__genres'>
					{genres.map((genre) => <li key={genre} className='item__genre'>{genre}</li>)}
				</ul></div>
		</Link>

	)
}