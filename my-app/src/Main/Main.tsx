import { Filter } from "../Filter/Filter"
import { Header } from "../Header/Header"
import { MainContent } from "../MainContent/MainContent"
import { Menu } from "../Menu/Menu"
import './Main.css'

export const Main = () => {
	return (<>
		<div className='content--wrapper'>
			<Menu></Menu>
			<MainContent></MainContent>
		</div>
	</>)
}