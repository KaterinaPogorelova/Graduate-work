import './recomendations.css'
import { Card } from '../Card/Card'
import { DetailedMovie, RecommendedMovie, getRecommended } from '../getMovies'
import { useState, useEffect, useContext } from 'react'
import { ThemeContext } from '../context'

type RecomProps = {
	id: number,
	favourites: DetailedMovie[]
}

export const Recomendations = ({ id, favourites }: RecomProps) => {
	const theme = useContext(ThemeContext)
	const [moviesList, setMoviesList] = useState<RecommendedMovie[]>([])
	useEffect(() => { getRecommended(id).then((movies) => setMoviesList(movies)) }, [])
	return (<>
		{moviesList.length !== 0 && <div className='recomendations'>
			<h2 className='recomendations__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Recomendations</h2>
			<div className='recomendations__item-wrapper'>
				{moviesList.map((movie: RecommendedMovie) => <Card key={movie.id} cardinfo={movie} favourites={favourites}></Card>)}
			</div>
		</div>}
	</>)
}