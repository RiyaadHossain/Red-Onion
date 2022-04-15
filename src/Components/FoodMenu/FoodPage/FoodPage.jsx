import React from 'react';
import { NavLink, Route, Routes } from 'react-router-dom';
import Home from '../../Home/Home';
import BreakFast from '../BreakFast/BreakFast';
import Dinner from '../Dinner/Dinner';

const FoodPage = () => {
    const activeLink = { color: '#dc2626', textDecoration: 'underline', paddingBottom: '2px'}
    return (
        <nav className='text-center my-8'>
           <NavLink style={(isActive) => isActive ? activeLink : undefined} className='text-xl ml-5 ' to={'foodItem/breakfast'}>Breakfast</NavLink> 
           <NavLink style={(isActive) => isActive ? activeLink : undefined} className='text-xl ml-5' to={'foodItem/lunch'}>Lunch</NavLink> 
            <NavLink style={(isActive) => isActive ? activeLink : undefined} className='text-xl ml-5' to={'foodItem/dinner'}>Dinner</NavLink> 
            <Dinner/>
            <Routes>
                <Route path='/foodItem' element={<Home/>}>
                    <Route path='breakfast' element={<BreakFast />}/>
                </Route>
            </Routes>
        </nav>
    );
};

export default FoodPage;