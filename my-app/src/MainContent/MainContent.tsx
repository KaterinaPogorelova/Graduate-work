import './mainContent.css'
import { Card } from '../Card/Card'
import { SortingIcons } from '../SortingIcons/SortingIcon'
import { Movie, getMovies, FilterParams } from '../getMovies'
import { useEffect, useState } from 'react'
type MainParams = {
	filterSort: FilterParams
}
export const MainContent = ({ filterSort }: MainParams) => {
	const [moviesList, setMoviesList] = useState<Movie[]>([])
	const [page, setPage] = useState(1)
	const [filter, setFilter] = useState<FilterParams>({ sortBy: 'vote_average.desc' })

	useEffect(() => { getMovies(page, filterSort).then((movie) => setMoviesList([...moviesList, ...movie])) }, [page])
	useEffect(() => { getMovies(1, filterSort).then((movie) => setMoviesList(movie)) }, [filterSort])
	/* useEffect(() => { filterSort ? setFilter(filterSort) : setFilter({ sortBy: 'vote_average.desc' }) }, [filterSort]) */
	return (<>
		<main className='main'>
			<div className='main__item-wrapper'>
				{moviesList.map((movie: Movie) => <Card key={movie.id} cardinfo={movie}></Card>)}
			</div>
			<button className='main__show-btn' onClick={async () => {
				setPage(page + 1)
				/* window.scrollTo(0, 2622) */
			}}>Show More</button>
		</main></>)
}