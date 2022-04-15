import React from 'react';
import Banner from '../Banner/Banner';
import FoodPage from '../FoodMenu/FoodPage/FoodPage';
import WhyUs from '../WhyUs/WhyUs';

const Home = () => {
    return (
        <div>
            <Banner />
            <FoodPage/>
            <WhyUs/>
        </div>
    );
};

export default Home;