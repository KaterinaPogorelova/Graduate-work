import './filter.css'
import { ReactComponent as Cross } from '..//SortingIcons/cross.svg'
import { useEffect, useState } from 'react'
import { getGenres, getCountries, FilterParams } from '../getMovies'

type Filter = {
	isVisible?: boolean,
	closeFilter: () => void,
	setFilterParams: ({ sortBy, genres, releaseDateGTE, releaseDateLTE, voteGTE, voteLTE }: FilterParams) => void
}

export const Filter = ({ isVisible, closeFilter, setFilterParams }: Filter) => {
	const [isShown, setisShown] = useState(isVisible)
	const [genres, setGenres] = useState<{ id: number, name: string }[]>([])
	const [countries, setCountries] = useState<string[]>([])


	const [sort, setSort] = useState<'vote_average.desc' | 'primary_release_date.desc'>('primary_release_date.desc')
	const [activeSort, setActiveSort] = useState<'Rating' | 'Year'>('Year')
	const [genresSort, setGenresSort] = useState<number[]>([])
	const [minYear, setMinYear] = useState('')
	const [maxYear, setMaxYear] = useState('')
	const [minRate, setMinRate] = useState(0)
	const [maxRate, setMaxRate] = useState(10)

	useEffect(() => setisShown(isVisible), [isVisible])
	useEffect(() => { getGenres().then((data) => setGenres(data)) }, [])
	useEffect(() => { getCountries().then((data) => setCountries(data)) }, [])

	return (<div className='filter' style={isShown ? { display: 'block' } : { display: 'none' }}>
		<button className='filter__button--cross' onClick={() => closeFilter()}><Cross /></button>
		<h1 className='filter__title'>Filters</h1>
		<div className='filter__sort-by'>
			<h3 className='filter__subtitle'>Sort By</h3>
			<div className='sort-by__buttons-wrapper'>
				<button className={activeSort === 'Rating' ? 'sort-by__button' : 'sort-by__button sort-by__button--active'} onClick={() => {
					setActiveSort('Rating')
					setSort('vote_average.desc')
				}}>Rating</button>
				<button className={activeSort === 'Year' ? 'sort-by__button' : 'sort-by__button sort-by__button--active'} onClick={() => {
					setActiveSort('Year')
					setSort('primary_release_date.desc')
				}}>Year</button>
			</div>
		</div>
		{/* <div className='filter__by-name'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle'>Full or short movie name</label>
				<input className='filter__input filter__input--large' type='text' placeholder='Your Text'></input>
			</div>
		</div> */}
		<div className='filter__by-genres'>
			<h3 className='filter__subtitle'>Genre</h3>
			<div className='filter__genres-wrapper'>
				{genres.map((genre) => <button key={genre.id} className={genresSort.includes(genre.id) ? 'filter__genre filter__genre--active' : 'filter__genre'} onClick={() => {
					if (genresSort.includes(genre.id)) {
						const newArr = genresSort.filter((genreId) => genreId !== genre.id)
						setGenresSort(newArr)
					} else {
						setGenresSort([...genresSort, genre.id])
					}
				}}>{genre.name}</button>)}
			</div>
		</div>
		<div className='filter__by-year'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle'>Year</label>
				<input className='filter__input' type='number' placeholder='From' min={1890} max={2023} onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMinYear(e.target.value)
					}
				}}></input>
				<input className='filter__input' type='number' placeholder='To' min={1890} max={2023} onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMaxYear(e.target.value)
					}
				}}></input>
			</div>
		</div>
		<div className='filter__by-ratig'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle'>Ratig</label>
				<input className='filter__input' type='number' placeholder='From' min={0.0} max={10.0} step="0.5" onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMinRate(Number(e.target.value))
					}
				}}></input>
				<input className='filter__input' type='number' placeholder='To' min={0} max={10} step="0.5" onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMaxRate(Number(e.target.value))
					}
				}}></input>
			</div>
		</div>
		{/* <div className='filter__by-country'>
			<div className='filter__input-wrapper'>
				<label htmlFor='Countries' className='filter__subtitle'>Country</label>
				<select name='Countries' id='Countries' className='filter__input filter__input--large'>
					{countries.map((country) => {
						return <option key={countries.indexOf(country)} value={country}>{country}</option>
					})}
				</select>
			</div>
		</div> */}
		<div className='filter__button-wrapper'>
			<button className='filter__button filter__button--clear' onClick={() => {
				setFilterParams({ sortBy: 'vote_average.desc' })
				setActiveSort('Year')
				setGenresSort([])
			}}>Clear filter</button>
			<button className='filter__button filter__button--confirm' onClick={() => {
				setFilterParams({ sortBy: sort, genres: genresSort.join(','), releaseDateGTE: minYear, releaseDateLTE: maxYear, voteGTE: minRate, voteLTE: maxRate })
			}}>Show Results</button>
		</div>
	</div>)
}