import './filter.css'
import { ReactComponent as Cross } from '..//SortingIcons/cross.svg'
import { useEffect, useState } from 'react'
import { getGenres, getCountries } from '../getMovies'

type Filter = {
	isVisible?: boolean,
	closeFilter: () => void
}

export const Filter = ({ isVisible, closeFilter }: Filter) => {
	const [isShown, setisShown] = useState(isVisible)
	const [genres, setGenres] = useState<string[]>([])
	const [countries, setCountries] = useState<string[]>([])

	useEffect(() => setisShown(isVisible), [isVisible])
	useEffect(() => { getGenres().then((data) => setGenres(data)) }, [])
	useEffect(() => { getCountries().then((data) => setCountries(data)) }, [])

	return (<div className='filter' style={isShown ? { display: 'block' } : { display: 'none' }}>
		<button className='filter__button--cross' onClick={() => closeFilter()}><Cross /></button>
		<h1 className='filter__title'>Filters</h1>
		<div className='filter__sort-by'>
			<h3 className='filter__subtitle'>Sort By</h3>
			<div className='sort-by__buttons-wrapper'>
				<button className='sort-by__button' disabled>Rating</button>
				<button className='sort-by__button sort-by__button--active'>Year</button>
			</div>
		</div>
		<div className='filter__by-name'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle'>Full or short movie name</label>
				<input className='filter__input filter__input--large' type='text' placeholder='Your Text'></input>
			</div>
		</div>
		<div className='filter__by-genres'>
			<h3 className='filter__subtitle'>Genre</h3>
			<div className='filter__genres-wrapper'>
				{genres.map((genre) => <button key={genre + '-1'} className='filter__genre'>{genre}</button>)}
			</div>
		</div>
		<div className='filter__by-year'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle'>Year</label>
				<input className='filter__input' type='number' placeholder='From' min={1890} max={2023}></input>
				<input className='filter__input' type='number' placeholder='To' min={1890} max={2023}></input>
			</div>
		</div>
		<div className='filter__by-ratig'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle'>Ratig</label>
				<input className='filter__input' type='number' placeholder='From' min={0.0} max={10.0} step="0.5"></input>
				<input className='filter__input' type='number' placeholder='To' min={0} max={10} step="0.5"></input>
			</div>
		</div>
		<div className='filter__by-country'>
			<div className='filter__input-wrapper'>
				<label htmlFor='Countries' className='filter__subtitle'>Country</label>
				<select name='Countries' id='Countries' className='filter__input filter__input--large'>
					{countries.map((country) => {
						return <option key={countries.indexOf(country)} value={country}>{country}</option>
					})}
				</select>
			</div>
		</div>
		<div className='filter__button-wrapper'>
			<button className='filter__button filter__button--clear'>Clear filter</button>
			<button className='filter__button filter__button--confirm'>Show Results</button>
		</div>
	</div>)
}