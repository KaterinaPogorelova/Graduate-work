import './recomendations.css'
import { Card } from '../Card/Card'
import { RecommendedMovie, getRecommended } from '../getMovies'
import { useState, useEffect } from 'react'

type RecomProps = {
	id: number
}

export const Recomendations = ({ id }: RecomProps) => {
	const [moviesList, setMoviesList] = useState<RecommendedMovie[]>([])
	useEffect(() => { getRecommended(id).then((movies) => setMoviesList(movies)) }, [])
	return (<div className='recomendations'>
		<h2 className='recomendations__title'>Recomendations</h2>
		<div className='recomendations__item-wrapper'>
			{moviesList.map((movie: RecommendedMovie) => <Card key={movie.id} cardinfo={movie}></Card>)}
		</div>
	</div>)
}