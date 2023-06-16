import { Menu } from '../Menu/Menu'
import './fullScreenMovie.css'
import { ReactComponent as Favs } from './Favs.svg'
import { ReactComponent as Share } from './Share.svg'
import { ReactComponent as IMDb } from './IMDb.svg'
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

	return (
		<div className='fullScreen'>
			<div className="fullScreen__mobile--view">
				<ul className='fullScreen__genres'>
					{genres.map((genre) => <li className='fullScreen__genre'>{genre}</li>)}
				</ul>
				<h1 className='fullScreen__title'>{movie?.title}</h1>
				<div className='fullScreen__rating-wrapper'>
					<p className='fullScreen__rating'>{movie?.vote_average}</p>
					{/* <div className='fullScreen__IMDb-rating'>
						<IMDb />
						<p className='IMDb-rating__text'>7.6</p>
					</div> */}
					<p className='fullScreen__duration'>{movie?.runtime + 'min'}</p>
				</div>
			</div>
			<div className='fullScreen__img-btns-wrapper'>
				<div className='fullScreen__img-wrapper'>
					<img className='fullScreen__img' src={movie ? ('https://image.tmdb.org/t/p/w342' + movie.poster_path) : '#'} alt={movie ? movie.title : 'movie-poster'} />
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
					<h1 className='fullScreen__title'>{movie?.title}</h1>
					<div className='fullScreen__rating-wrapper'>
						<p className='fullScreen__rating'>{movie?.vote_average}</p>
						{/* <div className='fullScreen__IMDb-rating'>
							<IMDb />
							<p className='IMDb-rating__text'>7.6</p>
						</div> */}
						<p className='fullScreen__duration'>{movie?.runtime + 'min'}</p>
					</div>
				</div>
				<p className='fullScreen__desc'>
					{movie?.overview}
				</p>
				<div className='fullScreen__props'>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Year</p>
						<p className='fullScreen__prop-desc'>{movie?.release_date.slice(0, 4)}</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Released</p>
						<p className='fullScreen__prop-desc'>{movie?.release_date}</p>
					</div>
					{movie && movie.budget !== 0 && <div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Budget</p>
						<p className='fullScreen__prop-desc'>{'$' + movie.budget}</p>
					</div>}
					{movie && movie.revenue !== 0 && <div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Revenue</p>
						<p className='fullScreen__prop-desc'>{'$' + movie.revenue}</p>
					</div>}
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Country</p>
						<p className='fullScreen__prop-desc'>{movie?.production_countries.map((country) => {
							if (movie.production_countries.indexOf(country) === movie.production_countries.length - 1) {
								return country.name
							} else {
								return country.name + ', '
							}
						})}</p>
					</div>
					<div className='fullScreen__prop'>
						<p className='fullScreen__prop-name'>Production</p>
						<p className='fullScreen__prop-desc'>{movie?.production_companies.map((company) => {
							if (movie.production_companies.indexOf(company) === movie.production_companies.length - 1) {
								return company.name
							} else {
								return company.name + ', '
							}
						})}</p>
					</div>
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