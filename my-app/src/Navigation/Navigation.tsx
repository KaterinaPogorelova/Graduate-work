import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Auth } from '../AuthReg/Auth';
import { Reg } from '../AuthReg/Reg';
import { RegRedirect } from '../AuthReg/RegRedirect';
import { useState } from 'react';
import { Activate } from '../AuthReg/Activate';

export const Navigation = () => {
	return (
		<Routes>
			<Route path='/*' element={<Main></Main>}></Route>
			<Route path='auth' element={<Auth></Auth>}></Route>
			<Route path='reg' element={<Reg></Reg>}></Route>
			<Route path='redirect' element={<RegRedirect></RegRedirect>}></Route>
			<Route path='//activate/:uid/:token' element={<Activate></Activate>}></Route>
		</Routes>
	)
}