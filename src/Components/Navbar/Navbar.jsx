import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';
import Logo from '../../Images/logo2.png'

const Navbar = () => {
    return (
        <div className='flex items-center justify-between h-20 container mx-auto'>
            <div>
                <img className='w-32' src={Logo} alt="" />
            </div>
            <nav className='flex items-center'>
                <Link className='ml-8 text-xl font-bold' to={'/cart'}><BsCart3/></Link>
                <Link className='ml-8 text-lg font-semibold' to={'/signin'}>Log In</Link>
                <Link className='ml-8 text-lg font-semibold bg-red-600 py-1 rounded-full text-white px-5' to={'/signup'}>Sign Up</Link>
            </nav>
        </div>
    );
};

export default Navbar;