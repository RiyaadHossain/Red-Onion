import React from 'react';
import { Link } from 'react-router-dom';
import { BsCart3 } from 'react-icons/bs';

const Navbar = () => {
    return (
        <div>
            <div>
                <h1>Logo</h1>
            </div>
            <nav>
                <Link to={'/cart'}><BsCart3/></Link>
                <Link to={'/signin'}>Log In</Link>
                <Link to={'/signup'}>Sign Up</Link>
            </nav>
        </div>
    );
};

export default Navbar;