import './mainContent.css'
import { Card } from '../Card/Card'
import { SortingIcons } from '../SortingIcons/SortingIcon'
import { Movie, getMovies, getTrends } from '../getMovies'
import { useEffect, useState } from 'react'

export const MainContent = () => {
	const [moviesList, setMoviesList] = useState<Movie[]>([])
	const [page, setPage] = useState(1)
	useEffect(() => { getMovies(page).then((movie) => setMoviesList([...moviesList, ...movie])) }, [page])
	return (<>
		<main className='main'>
			<div className='main__item-wrapper'>
				{moviesList.map((movie: Movie) => <Card key={movie.id} cardinfo={movie}></Card>)}
			</div>
			<button className='main__show-btn' onClick={() => {
				setPage(page + 1)
				/* window.scrollTo(0, 2622) */
			}}>Show More</button>
		</main></>)
}