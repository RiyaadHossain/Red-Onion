import React from 'react';
import Breakfast1 from '../../../Images/breakfast/breakfast1.png'
import Breakfast2 from '../../../Images/breakfast/breakfast2.png'
import Breakfast3 from '../../../Images/breakfast/breakfast3.png'
import Breakfast4 from '../../../Images/breakfast/breakfast4.png'
import Breakfast5 from '../../../Images/breakfast/breakfast5.png'
import Breakfast6 from '../../../Images/breakfast/breakfast6.png'

const BreakFast = () => {
    return (
        <div className='grid grid-cols-3 gap-8 mt-14'>
            <div>
                <img className='w-36 mx-auto mb-3' src={Breakfast1} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$23.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Breakfast2} alt="" />
                <h3 className='text-xl font-semibold'>Fried Chicken Bento</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$9.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Breakfast3} alt="" />
                <h3 className='text-xl font-semibold'>Rubbed-Salmon</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$6.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Breakfast4} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$8.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Breakfast5} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$16.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Breakfast6} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$7.99</p>
            </div>
        </div>
    );
};

export default BreakFast;