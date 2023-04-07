import React from 'react';
import { Link } from 'react-router-dom';
import Order from '../Order/Order';

const Header = () => {
    return (
        <>
            
            <nav className='flex gap-5 justify-end p-4 font-semibold text-blue-500'>
                <Link to='/'>Home</Link>
                <Link to='/order'>Order</Link>
                <Link to='/Check'>Check List</Link>
                <Link to='/signIn'>Sign in</Link>
                <Link to='/signOut'>Sign out</Link>
            </nav>
        </>
    );
};

export default Header;