import React from 'react';
import { BsFillArrowRightCircleFill } from 'react-icons/bs';
import FastDelivery from '../../Images/fastDelivery.png'
import Responder from '../../Images/Responder.png'
import HomeDelivery from '../../Images/homeDelivery.png'
import fastIcon from '../../Images/icons/fastDelivery.png'
import respondIcon from '../../Images/icons/Responder.png'
import homeIcon from '../../Images/icons/homeDelivery.png'

const WhyUs = () => {
    return (
        <div className='container mx-auto my-24'>
            <h1 className='text-4xl font-bold'>Why Choose us</h1>
            <p className='text-xl mt-3 max-w-lg'>Barton waited  twenty always repair in within we do. An delighted offending curiosity my is dashwoods at. boy properous increasing surrounded.</p>
            <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                <div>
                    <img src={FastDelivery} alt="" />
                    <div className='flex items-center mt-5 px-4'><img src={fastIcon} alt="" />
                    <h3 className='text-2xl font-semibold ml-3'>Fast Delivery</h3></div>

                    <div className='px-10 pb-5'>
                    <p className='mt-4 text-lg text-slate-600'>You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers </p>
                    <button className='flex items-center mt-3'><span className='text-blue-600 font-semibold'>See More</span><BsFillArrowRightCircleFill className='ml-2 text-green-600'/></button>
                    </div>
                </div>
                <div className='border shadow rounded-3xl'>
                    <img src={Responder} alt="" />
                    <div className='flex items-center mt-5 px-4'><img src={respondIcon} alt="" />
                    <h3 className='text-2xl font-semibold ml-3'>A Good Auto Respond</h3></div>

                   <div className='px-10 pb-5'> <p className='mt-4 text-lg text-slate-600'>You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers </p>
                    <button className='flex items-center mt-3'><span className='text-blue-600 font-semibold'>See More</span><BsFillArrowRightCircleFill className='ml-2 text-green-600'/></button></div>
                </div>
                <div>
                    <img src={HomeDelivery} alt="" />
                    <div className='flex items-center mt-5 px-4'><img src={homeIcon} alt="" />
                    <h3 className='text-2xl font-semibold ml-3'>Home Delivery</h3></div>

                    <div className='px-10 pb-5'><p className='mt-4 text-lg text-slate-600'>You can use Firebase Authentication to allow users to sign in to your app using one or more sign-in methods, including email address and password sign-in, and federated identity providers </p>
                    <button className='flex items-center mt-3'><span className='text-blue-600 font-semibold'>See More</span><BsFillArrowRightCircleFill className='ml-2 text-green-600'/></button></div>
                </div>
            </div>
        </div>
    );
};

export default WhyUs;