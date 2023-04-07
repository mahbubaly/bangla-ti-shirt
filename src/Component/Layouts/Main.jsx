import React from 'react';
import Header from '../Header/Header';
import Order from '../Order/Order';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='container'>
            <Header/>
            <Outlet></Outlet>
            
            
        </div>
    );
};

export default Main;