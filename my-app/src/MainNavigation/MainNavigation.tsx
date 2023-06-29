import { Routes, Route } from 'react-router-dom';
import { FullScreenMovie } from '../FullScreenMovie/FullScreenMovie';
import { MainContent } from '../MainContent/MainContent';
import { Trends } from '../Trends/Trends';
import { Favourites } from '../Favourites/Favourites';
import { Settings } from '../Settings/Settings';
import { SearchResultsComp } from '../SearchResultsComp/SearchResultsComp';
import { DetailedMovie, FilterParams } from '../getMovies';
import { useState } from 'react';

type NavProps = {
	searchInputValue: string,
	filter: FilterParams
}

export const MainNavigation = ({ searchInputValue, filter }: NavProps) => {
	const [favourites, setFavourites] = useState<DetailedMovie[]>([])

	const addFavourite = (favourite: DetailedMovie) => {
		setFavourites([...favourites, favourite])
	}
	const removeFromFavs = (id: number) => {
		const newArr = favourites.filter((favmovie) => favmovie.id !== id)
		setFavourites(newArr)
	}

	return (<>
		<Routes>
			<Route path='/'>
				<Route index element={<MainContent filterSort={filter} favourites={favourites}></MainContent>}></Route>
				<Route path='trends' element={<Trends favourites={favourites}></Trends>}></Route>
				<Route path='favourites' element={<Favourites favourites={favourites}></Favourites>}></Route>
				<Route path='settings' element={<Settings></Settings>}></Route>
				<Route path=':movieId' element={<FullScreenMovie addFavs={addFavourite} favourites={favourites} removeFav={removeFromFavs}></FullScreenMovie>}></Route>
				<Route path='search' element={<SearchResultsComp searchInputValue={searchInputValue} favourites={favourites}></SearchResultsComp>}></Route>
			</Route>
		</Routes>
	</>)
}