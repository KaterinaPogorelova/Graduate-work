import '../MainContent/mainContent.css'
import { Card } from '../Card/Card'
import { SortingIcons } from '../SortingIcons/SortingIcon'
import { Movie, getTrends } from '../getMovies'
import { useEffect, useState } from 'react'

export const Trends = () => {
	const [moviesList, setMoviesList] = useState<Movie[]>([])
	const [page, setPage] = useState(1)

	useEffect(() => { getTrends(page).then((movie) => setMoviesList([...moviesList, ...movie])) }, [page])
	return (<>
		<main className='main'>
			<div className='main__item-wrapper'>
				{moviesList.map((movie: Movie) => <Card key={movie.title} cardinfo={movie}></Card>)}
			</div>
			<button className='main__show-btn' onClick={() => {
				setPage(page + 1)
			}}>Show More</button>
		</main></>)
}