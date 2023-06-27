import { Menu } from "../Menu/Menu"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../Header/Header"
import { MainNavigation } from "../MainNavigation/MainNavigation"
import { FilterParams } from "../getMovies"

export const Main = () => {
	const [menuOpened, setMenuOpened] = useState(false)
	const [searchInputValue, setSearchInputValue] = useState('')
	const [filter, setFilter] = useState<FilterParams>({ sortBy: 'primary_release_date.desc' })
	const navigate = useNavigate()
	const getSearchValue = (searchInputValue: string) => {
		setSearchInputValue(searchInputValue)
	}

	const showMenu = () => {
		setMenuOpened(!menuOpened)
	}

	const setFilterParams = ({ sortBy, genres, releaseDateGTE, releaseDateLTE, voteGTE, voteLTE }: FilterParams) => {
		setFilter({ sortBy, genres, releaseDateGTE, releaseDateLTE, voteGTE, voteLTE })
	}

	useEffect(() => {
		if (searchInputValue) {
			navigate('/search')
		} else {
			return
		}
	}, [searchInputValue])
	return (<div className='container'>
		<Header showMenu={showMenu} handleSearch={getSearchValue} setFilterParams={setFilterParams}></Header>
		<div className='content--wrapper'>
			<Menu isOpenedMob={menuOpened} showMenu={showMenu}></Menu>
			<MainNavigation searchInputValue={searchInputValue} filter={{ sortBy: filter.sortBy, genres: filter.genres, releaseDateGTE: filter.releaseDateGTE, releaseDateLTE: filter.releaseDateLTE, voteGTE: filter.voteGTE, voteLTE: filter.voteLTE }}></MainNavigation>
		</div>
	</div >)
}