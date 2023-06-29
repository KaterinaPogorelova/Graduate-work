import '../MainContent/mainContent.css'
import { Card } from '../Card/Card'
import { SortingIcons } from '../SortingIcons/SortingIcon'
import { DetailedMovie, Movie, getTrends } from '../getMovies'
import { useEffect, useState } from 'react'

type TrendsProps = {
	favourites: DetailedMovie[]
}

export const Trends = ({ favourites }: TrendsProps) => {
	const [moviesList, setMoviesList] = useState<Movie[]>([])
	const [page, setPage] = useState(1)

	useEffect(() => { getTrends(page).then((movie) => setMoviesList([...moviesList, ...movie])) }, [page])
	return (<>
		<main className='main'>
			<div className='main__item-wrapper'>
				{moviesList.map((movie: Movie) => <Card key={movie.title} cardinfo={movie} isTrends favourites={favourites}></Card>)}
			</div>
			<button className='main__show-btn' onClick={() => {
				setPage(page + 1)
			}}>Show More</button>
		</main></>)
}