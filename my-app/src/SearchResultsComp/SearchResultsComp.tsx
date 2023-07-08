import { useEffect, useState, useContext } from 'react'
import '../MainContent/mainContent.css'
import { Card } from '../Card/Card'
import { SortingIcons } from '../SortingIcons/SortingIcon'
import { searchMovies, SearchedMovie, DetailedMovie } from '../getMovies'
import { useNavigate } from 'react-router-dom'
import { ThemeContext } from '../context'

type SearchProps = {
	searchInputValue: string,
	favourites: DetailedMovie[]
}

export const SearchResultsComp = ({ searchInputValue, favourites }: SearchProps) => {
	const [searchedMoviesList, setSearchMoviesList] = useState<SearchedMovie[]>([])
	const [page, setPage] = useState(1)
	const [searchValue, setSearchValue] = useState<string>('')
	const theme = useContext(ThemeContext)
	const navigate = useNavigate()
	useEffect(() => {
		if (searchInputValue) {
			setSearchValue(searchInputValue)
		} else {
			setSearchValue('')
			setSearchMoviesList([])
			navigate('/')
		}
	}, [searchInputValue])

	useEffect(() => { searchMovies(searchValue, 1).then((movie) => setSearchMoviesList(movie)) }, [searchValue])
	useEffect(() => { searchMovies(searchValue, page).then((movie) => setSearchMoviesList([...searchedMoviesList, ...movie])) }, [page])
	return (<>
		<div className='main'>
			<div className='main__item-wrapper'>
				{searchedMoviesList.map((movie: SearchedMovie) => <Card key={movie.id} cardinfo={movie} favourites={favourites}></Card>)}
				{searchedMoviesList.length === 0 && <h1 style={{ color: theme === 'dark' ? '#fff' : '#000', textAlign: 'center', width: '100%' }}>Not Found</h1>}
			</div>
			{searchedMoviesList.length !== 0 && <button className='main__show-btn' onClick={() => setPage(page + 1)}>Show More</button>}
		</div></>)
}