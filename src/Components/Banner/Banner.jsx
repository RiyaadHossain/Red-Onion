import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container h-[90vh] flex justify-center '>
          <div className='mt-52'>  <h1 className='text-5xl font-bold text-center'>Best Food Waiting for Your Belly</h1>
            <div className='flex justify-center mt-10'><input className=' pl-4 text-lg rounded-l-full outline-none ' type="text" name="" id="" placeholder='I want to eat... 🍕'/><button className='bg-red-600 px-5 py-2 rounded-full text-white font-semibold'>Search</button></div></div>
        </div>
    );
};

export default Banner;