import './filter.css'
import { ReactComponent as Cross } from '..//SortingIcons/cross.svg'
import { useEffect, useState, useContext } from 'react'
import { getGenres, getCountries, FilterParams } from '../getMovies'
import { ThemeContext } from '../context'
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

	const theme = useContext(ThemeContext)

	useEffect(() => setisShown(isVisible), [isVisible])
	useEffect(() => { getGenres().then((data) => setGenres(data)) }, [])
	useEffect(() => { getCountries().then((data) => setCountries(data)) }, [])

	return (<div className='filter' style={(isShown ? (theme === 'dark' ? { display: 'block', background: '#242426', border: 'none' } : { display: 'block', background: '#fff', border: '1px solid #AFB2B6' }) : { display: 'none' }) /* && (theme === 'dark' ? { background: '#242426', border: 'none' } : { background: '#fff', border: '1px solid #AFB2B6' }) */}>
		<button className='filter__button--cross' onClick={() => closeFilter()}><Cross /></button>
		<h1 className='filter__title' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Filters</h1>
		<div className='filter__sort-by'>
			<h3 className='filter__subtitle' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Sort By</h3>
			<div className='sort-by__buttons-wrapper'>
				<button className='sort-by__button' style={(activeSort === 'Rating' ? (theme === 'dark' ? { color: '#fff', background: '#323537' } : { color: '#000', background: '#fff' }) : (theme === 'dark' ? { background: '#242426', color: '#80858B' } : { background: '#AFB2B6', color: '#80858B' }))} onClick={() => {
					setActiveSort('Rating')
					setSort('vote_average.desc')
				}}>Rating</button>
				<button className='sort-by__button' style={(activeSort === 'Year' ? (theme === 'dark' ? { color: '#fff', background: '#323537' } : { color: '#000', background: '#fff' }) : (theme === 'dark' ? { background: '#242426', color: '#80858B' } : { background: '#AFB2B6', color: '#80858B' }))} onClick={() => {
					setActiveSort('Year')
					setSort('primary_release_date.desc')
				}}>Year</button>
			</div>
		</div>
		<div className='filter__by-genres'>
			<h3 className='filter__subtitle' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Genre</h3>
			<div className='filter__genres-wrapper' style={theme === 'dark' ? { background: '#323537', border: 'none' } : { background: '#fff', border: '1px solid #323537' }}>
				{genres.map((genre) => <button key={genre.id} className='filter__genre' onClick={() => {
					if (genresSort.includes(genre.id)) {
						const newArr = genresSort.filter((genreId) => genreId !== genre.id)
						setGenresSort(newArr)
					} else {
						setGenresSort([...genresSort, genre.id])
					}
				}} style={genresSort.includes(genre.id) ? { background: '#7B61FF', color: '#fff' } : (theme === 'dark' ? { background: '#242426', color: '#fff' } : { background: '#AFB2B6', color: '#000' })}>{genre.name}</button>)}
			</div>
		</div>
		<div className='filter__by-year'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Year</label>
				<input className='filter__input' type='number' placeholder='From' min={1890} max={2023} style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMinYear(e.target.value)
					}
				}}></input>
				<input className='filter__input' type='number' placeholder='To' min={1890} max={2023} style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMaxYear(e.target.value)
					}
				}}></input>
			</div>
		</div>
		<div className='filter__by-ratig'>
			<div className='filter__input-wrapper'>
				<label className='filter__subtitle' style={theme === 'dark' ? { color: '#fff' } : { color: '#000' }}>Ratig</label>
				<input className='filter__input' type='number' placeholder='From' min={0.0} max={10.0} step="0.5" style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMinRate(Number(e.target.value))
					}
				}}></input>
				<input className='filter__input' type='number' placeholder='To' min={0} max={10} step="0.5" style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }} onChange={(e) => {
					if (Number(e.target.value) > Number(e.target.min) && Number(e.target.value) < Number(e.target.max)) {
						setMaxRate(Number(e.target.value))
					}
				}}></input>
			</div>
		</div>
		<div className='filter__button-wrapper'>
			<button className='filter__button filter__button--clear' onClick={() => {
				setFilterParams({ sortBy: 'primary_release_date.desc' })
				setActiveSort('Year')
				setGenresSort([])
				closeFilter()
			}} style={theme === 'dark' ? { background: '#323537', color: '#fff' } : { background: '#AFB2B6', color: '#000' }}>Clear filter</button>
			<button className='filter__button filter__button--confirm' onClick={() => {
				setFilterParams({ sortBy: sort, genres: genresSort.join(','), releaseDateGTE: minYear, releaseDateLTE: maxYear, voteGTE: minRate, voteLTE: maxRate })
				closeFilter()
			}}>Show Results</button>
		</div>
	</div>)
}