import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='flex justify-end items-center'>
            
            <Navbar></Navbar>
        </div>
    );
};

export default Main;