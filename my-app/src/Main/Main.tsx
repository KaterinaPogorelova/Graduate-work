import { Menu } from "../Menu/Menu"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Header } from "../Header/Header"
import { MainNavigation } from "../MainNavigation/MainNavigation"

export const Main = () => {
	const [menuOpened, setMenuOpened] = useState(false)
	const [searchInputValue, setSearchInputValue] = useState('')
	const navigate = useNavigate()
	const getSearchValue = (searchInputValue: string) => {
		setSearchInputValue(searchInputValue)
	}

	const showMenu = () => {
		setMenuOpened(!menuOpened)
	}

	useEffect(() => {
		if (searchInputValue) {
			navigate('/search')
		} else {
			return
		}
	}, [searchInputValue])
	return (<div className='container'>
		<Header showMenu={showMenu} handleSearch={getSearchValue}></Header>
		<div className='content--wrapper'>
			<Menu isOpenedMob={menuOpened} showMenu={showMenu}></Menu>
			<MainNavigation searchInputValue={searchInputValue}></MainNavigation>
		</div>
	</div>)
}