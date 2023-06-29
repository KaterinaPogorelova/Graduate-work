import { useEffect, useState } from 'react'
import '../MainContent/mainContent.css'
import { Card } from '../Card/Card'
import { SortingIcons } from '../SortingIcons/SortingIcon'
import { searchMovies, SearchedMovie, DetailedMovie } from '../getMovies'
import { useNavigate } from 'react-router-dom'

type SearchProps = {
	searchInputValue: string,
	favourites: DetailedMovie[]
}

export const SearchResultsComp = ({ searchInputValue, favourites }: SearchProps) => {
	const [searchedMoviesList, setSearchMoviesList] = useState<SearchedMovie[]>([])
	const [page, setPage] = useState(1)
	const [searchValue, setSearchValue] = useState<string>('')

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
			</div>
			{searchedMoviesList.length !== 0 && <button className='main__show-btn' onClick={() => setPage(page + 1)}>Show More</button>}
		</div></>)
}