import { Routes, Route } from 'react-router-dom';
import { Main } from '../Main/Main';
import { Auth } from '../AuthReg/Auth';
import { Reg } from '../AuthReg/Reg';
import { useState } from 'react';

export const Navigation = () => {
	return (
		<Routes>
			<Route path='/*' element={<Main></Main>}></Route>
			<Route path='auth' element={<Auth></Auth>}></Route>
			<Route path='reg' element={<Reg></Reg>}></Route>
		</Routes>
	)
}