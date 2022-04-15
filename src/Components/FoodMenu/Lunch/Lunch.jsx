import React from 'react';
import Lunch1 from '../../../Images/lunch/lunch1.png'
import Lunch2 from '../../../Images/lunch/lunch2.png'
import Lunch3 from '../../../Images/lunch/lunch3.png'
import Lunch4 from '../../../Images/lunch/lunch4.png'
import Lunch5 from '../../../Images/lunch/lunch5.png'
import Lunch6 from '../../../Images/lunch/lunch6.png'

const Lunch = () => {
    return (
        <div className='grid grid-cols-3 gap-8 mt-14'>
            <div>
                <img className='w-36 mx-auto mb-3' src={Lunch1} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$23.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Lunch2} alt="" />
                <h3 className='text-xl font-semibold'>Fried Chicken Bento</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$9.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Lunch3} alt="" />
                <h3 className='text-xl font-semibold'>Rubbed-Salmon</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$6.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Lunch4} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$8.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Lunch5} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$16.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Lunch6} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$7.99</p>
            </div>
        </div>
    );
};

export default Lunch;