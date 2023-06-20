import { Routes, Route } from 'react-router-dom';
import { FullScreenMovie } from '../FullScreenMovie/FullScreenMovie';
import { MainContent } from '../MainContent/MainContent';
import { Trends } from '../Trends/Trends';
import { Favourites } from '../Favourites/Favourites';
import { Settings } from '../Settings/Settings';
import { SearchResultsComp } from '../SearchResultsComp/SearchResultsComp';
type NavProps = {
	searchInputValue: string
}

export const Navigation = ({ searchInputValue }: NavProps) => {
	return (<>
		<Routes>
			<Route index element={<MainContent></MainContent>}></Route>
			<Route path='trends' element={<Trends></Trends>}></Route>
			<Route path='favourites' element={<Favourites></Favourites>}></Route>
			<Route path='settings' element={<Settings></Settings>}></Route>
			<Route path=':movieId' element={<FullScreenMovie />}></Route>
			<Route path='search' element={<SearchResultsComp searchInputValue={searchInputValue}></SearchResultsComp>}></Route>
		</Routes>
	</>)
}