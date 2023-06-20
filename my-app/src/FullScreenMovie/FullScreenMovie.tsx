import { Menu } from '../Menu/Menu'
import './fullScreenMovie.css'
import { ReactComponent as Favs } from './Favs.svg'
import { ReactComponent as Share } from './Share.svg'
import { ReactComponent as NotFound } from './image-not-found-icon.svg'
import { Recomendations } from '../Recomendations/Recomendations'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DetailedMovie, getMovie, getMovieGenres } from '../getMovies'

export const FullScreenMovie = () => {
	const [movie, setMovie] = useState<DetailedMovie | null>(null)
	const [genres, setGenres] = useState<string[]>([])

	const params = useParams()
	useEffect(() => { params.movieId && getMovie(Number(params.movieId)).then(movie => setMovie(movie)) }, [])
	useEffect(() => { getMovieGenres(Number(params.movieId)).then((data) => setGenres(data)) }, [])

	const getDate = (date: string) => {
		const year = date.slice(0, 4)
		const month = date.slice(5, 2)
		const day = date.slice(8, 2)
		const newDate = day + ' ' + month + ' ' + year
		return newDate
	}

	if (!movie) {
		return <h1>Movie not found</h1>
	}

	return (
		<div className='fullScreen'>
			<div className="fullScreen__mobile--view">
				<ul className='fullScreen__genres'>
					{genres.map((genre) => <li className='fullScreen__genre'>{genre}</li>)}
				</ul>
				<h1 className='fullScreen__title'>{movie.title}</h1>
				<div className='fullScreen__rating-wrapper'>
					<p className='fullScreen__rating'>{movie.vote_average}</p>
					<p className='fullScreen__duration'>{movie.runtime + 'min'}</p>
				</div>
			</div>
			<div className='fullScreen__img-btns-wrapper'>
				<div className={movie.poster_path ? 'fullScreen__img-wrapper' : 'fullScreen__img-wrapper fullScreen__img-wrapper--empty'}>
					{movie.poster_path && <img className='fullScreen__img' src={'https://image.tmdb.org/t/p/w342' + movie.poster_path} alt={movie.title} />}
					{!movie.poster_path && <NotFound />}
					{!movie.poster_path && <p>Not Found</p>}
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
						{genres.map((genre) => <li className='fullScreen__genre'>{genre}</li>)}
					</ul>
					<h1 className='fullScreen__title'>{movie.title}</h1>
					<div className='fullScreen__rating-wrapper'>
						<p className='fullScreen__rating'>{movie.vote_average}</p>
						<p className='fullScreen__duration'>{movie.runtime + 'min'}</p>
					</div>
				</div>
				<p className='fullScreen__desc'>
					{movie.overview}
				</p>
				<div className='fullScreen__props'>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Year</p>
						<p className='fullScreen__prop-desc'>{movie.release_date.slice(0, 4)}</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Released</p>
						<p className='fullScreen__prop-desc'>{movie.release_date}</p>
					</div>
					{movie.budget !== 0 && <div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Budget</p>
						<p className='fullScreen__prop-desc'>{'$' + movie.budget}</p>
					</div>}
					{movie.revenue !== 0 && <div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Revenue</p>
						<p className='fullScreen__prop-desc'>{'$' + movie.revenue}</p>
					</div>}
					{movie.production_countries !== undefined && movie.production_countries.length !== 0 && <div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Country</p>
						<p className='fullScreen__prop-desc'>{movie.production_countries.map((country) => {
							if (!movie.production_countries) return
							if (movie.production_countries.indexOf(country) === movie.production_countries.length - 1) {
								return country.name
							} else {
								return country.name + ', '
							}
						})}</p>
					</div>}
					{movie.production_companies !== undefined && movie.production_companies.length !== 0 && <div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Production</p>
						<p className='fullScreen__prop-desc'>{movie.production_companies.map((company) => {
							if (!movie.production_companies) return
							if (movie.production_companies.indexOf(company) === movie.production_companies.length - 1) {
								return company.name
							} else {
								return company.name + ', '
							}
						})}</p>
					</div>}
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Status</p>
						<p className='fullScreen__prop-desc'>{movie?.status}</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Original Language</p>
						<p className='fullScreen__prop-desc'>{movie?.original_language}</p>
					</div>
				</div>
				{movie && <Recomendations id={movie.id}></Recomendations>}
			</div>
		</div>
	)
}