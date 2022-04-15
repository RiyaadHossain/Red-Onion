import React from 'react';
import Dinner1 from '../../../Images/dinner/dinner1.png'
import Dinner2 from '../../../Images/dinner/dinner2.png'
import Dinner3 from '../../../Images/dinner/dinner3.png'
import Dinner4 from '../../../Images/dinner/dinner4.png'
import Dinner5 from '../../../Images/dinner/dinner5.png'
import Dinner6 from '../../../Images/dinner/dinner6.png'

const Dinner = () => {
    return (
        <div className='grid grid-cols-3 gap-8 mt-14'>
            <div>
                <img className='w-36 mx-auto mb-3' src={Dinner1} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$23.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Dinner2} alt="" />
                <h3 className='text-xl font-semibold'>Fried Chicken Bento</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$9.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Dinner3} alt="" />
                <h3 className='text-xl font-semibold'>Rubbed-Salmon</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$6.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Dinner4} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$8.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Dinner5} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$16.99</p>
            </div>
            <div>
                <img className='w-36 mx-auto mb-3' src={Dinner6} alt="" />
                <h3 className='text-xl font-semibold'>Healthy Meal Plan</h3>
                <p className='text-lg my-2 text-gray-500'>A healthy diet for your breakfast</p>
                <p className='text-2xl font-bold'>$7.99</p>
            </div>
        </div>
    );
};

export default Dinner;