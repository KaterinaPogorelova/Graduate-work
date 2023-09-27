import './fullScreenMovie.css'
import { ReactComponent as NotFound } from './image-not-found-icon.svg'
import { Recomendations } from '../Recomendations/Recomendations'
import { useParams } from 'react-router-dom'
import { useEffect, useState, useContext } from 'react'
import { DetailedMovie, getMovie, getMovieGenres } from '../getMovies'
import { ThemeContext } from '../context'
import { checkMe } from '../auth'
import { FavandShareBtns } from './FavandShareBtns/FavandShareBtns'
import { FullScreenProps } from './FullScreenProps/FullScreenProps'

type FullScreenProps = {
	addFavs: (favourite: DetailedMovie) => void,
	favourites: DetailedMovie[],
	removeFav: (id: number) => void
}
export const FullScreenMovie = ({ addFavs, favourites, removeFav }: FullScreenProps) => {
	const [movie, setMovie] = useState<DetailedMovie | null>(null)
	const [genres, setGenres] = useState<string[]>([])
	const [user, setUser] = useState<string | null>(null)
	const theme = useContext(ThemeContext)
	const params = useParams()

	useEffect(() => { params.movieId && getMovie(Number(params.movieId)).then(movie => setMovie(movie)) }, [])
	useEffect(() => { getMovieGenres(Number(params.movieId)).then((data) => setGenres(data)) }, [])
	useEffect(() => { checkMe().then((me) => me && setUser(me.username)) }, [])

	if (!movie) {
		return <h1 style={{ color: theme === 'dark' ? '#fff' : '#000', textAlign: 'center', width: '100%' }}>Movie not found</h1>
	}

	return (
		<div className='fullScreen'>
			<div className="fullScreen__mobile--view">
				<ul className='fullScreen__genres'>
					{genres.map((genre) => <li className='fullScreen__genre' key={genre}>{genre}</li>)}
				</ul>
				<h1 className='fullScreen__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie.title}</h1>
				<div className='fullScreen__rating-wrapper'>
					<p className='fullScreen__rating'>{movie.vote_average.toFixed(1)}</p>
					<p className='fullScreen__duration'>{movie.runtime + 'min'}</p>
				</div>
			</div>
			<div className='fullScreen__img-btns-wrapper'>
				<div className={movie.poster_path ? 'fullScreen__img-wrapper' : 'fullScreen__img-wrapper fullScreen__img-wrapper--empty'}>
					{movie.poster_path && <img className='fullScreen__img' src={'https://image.tmdb.org/t/p/w342' + movie.poster_path} alt={movie.title} />}
					{!movie.poster_path && <NotFound />}
					{!movie.poster_path && <p>Not Found</p>}
				</div>
				{user &&<FavandShareBtns favourites={favourites} addFavs={addFavs} removeFav={removeFav} movie={movie}></FavandShareBtns>}
			</div>
			<div className='fullScreen__info-wrapper'>
				<div className="fullScreen__not-mobile--view">
					<ul className='fullScreen__genres'>
						{genres.map((genre) => <li className='fullScreen__genre' key={genre}>{genre}</li>)}
					</ul>
					<h1 className='fullScreen__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>{movie.title}</h1>
					<div className='fullScreen__rating-wrapper'>
						<p className='fullScreen__rating'>{movie.vote_average.toFixed(1)}</p>
						<p className='fullScreen__duration' style={theme === 'dark' ? { background: '#323537' } : { background: '#AFB2B6' }}>{movie.runtime + 'min'}</p>
					</div>
				</div>
				<p className='fullScreen__desc' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>
					{movie.overview}
				</p>
				<FullScreenProps movie={movie}></FullScreenProps>
				{movie && <Recomendations id={movie.id} favourites={favourites}></Recomendations>}
			</div>
		</div>
	)
}