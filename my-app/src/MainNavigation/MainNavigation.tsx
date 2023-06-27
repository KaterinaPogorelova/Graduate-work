import { Routes, Route } from 'react-router-dom';
import { FullScreenMovie } from '../FullScreenMovie/FullScreenMovie';
import { MainContent } from '../MainContent/MainContent';
import { Trends } from '../Trends/Trends';
import { Favourites } from '../Favourites/Favourites';
import { Settings } from '../Settings/Settings';
import { SearchResultsComp } from '../SearchResultsComp/SearchResultsComp';
import { FilterParams } from '../getMovies';

type NavProps = {
	searchInputValue: string,
	filter: FilterParams
}

export const MainNavigation = ({ searchInputValue, filter }: NavProps) => {
	return (<>
		<Routes>
			<Route path='/'>
				<Route index element={<MainContent filterSort={filter}></MainContent>}></Route>
				<Route path='trends' element={<Trends></Trends>}></Route>
				<Route path='favourites' element={<Favourites></Favourites>}></Route>
				<Route path='settings' element={<Settings></Settings>}></Route>
				<Route path=':movieId' element={<FullScreenMovie />}></Route>
				<Route path='search' element={<SearchResultsComp searchInputValue={searchInputValue}></SearchResultsComp>}></Route>
			</Route>
		</Routes>
	</>)
}