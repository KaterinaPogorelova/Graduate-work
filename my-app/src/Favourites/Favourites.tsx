import './favourites.css'
import card from './emptyCard.png'
import { ReactComponent as AddBtn } from './image-upload.svg'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { DetailedMovie } from '../getMovies'
import { Card } from '../Card/Card'

type FavsProps = {
	favourites: DetailedMovie[]
}
export const Favourites = ({ favourites }: FavsProps) => {
	return (<div className={favourites.length === 0 ? 'main favourites--empty' : 'main'}>
		{favourites.length === 0 && <div className='favourites__empty-wrapper'>
			<img src={card} alt="empty" />
			<Link to='/' className='favourites__empty-addbtn'><AddBtn /></Link>
			<p className='favourites__empty-text'>Nothing is here</p>
		</div>}
		{favourites.length !== 0 && <>
			<div className='main__item-wrapper'>
				{favourites.map((movie: DetailedMovie) => <Card key={movie.id} cardinfo={movie} favourites={favourites}></Card>)}
			</div>
		</>}
	</div>)
}