import './mainContent.css'
import { Card } from '../Card/Card'
import { Movie, getMovies, FilterParams, DetailedMovie } from '../getMovies'
import { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../context'

type MainParams = {
	filterSort: FilterParams,
	favourites: DetailedMovie[]
}
export const MainContent = ({ filterSort, favourites }: MainParams) => {
	const [moviesList, setMoviesList] = useState<Movie[]>([])
	const [page, setPage] = useState(1)
	const theme = useContext(ThemeContext)

	useEffect(() => { getMovies(page, filterSort).then((movie) => setMoviesList([...moviesList, ...movie])) }, [page])
	useEffect(() => { getMovies(1, filterSort).then((movie) => setMoviesList(movie)) }, [filterSort])

	return (<>
		<main className='main'>
			<div className='main__item-wrapper'>
				{moviesList.map((movie: Movie) => <Card key={movie.id} cardinfo={movie} favourites={favourites}></Card>)}
			</div>
			<button className='main__show-btn' onClick={async () => {
				setPage(page + 1)
				/* window.scrollTo(0, 2622) */
			}} style={theme === 'dark' ? { background: '#323537' } : { background: '#AFB2B6' }}>Show More</button>
		</main></>)
}