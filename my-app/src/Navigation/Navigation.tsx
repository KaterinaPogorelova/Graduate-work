import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { FullScreenMovie } from '../FullScreenMovie/FullScreenMovie';

export const Navigation = () => {
	return (<>
		<Routes>
			<Route index element={<Main></Main>}></Route>
			<Route path=':movieId' element={<FullScreenMovie />}></Route>
		</Routes>
	</>)
}