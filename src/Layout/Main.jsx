import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Pages/Header/Header';
import Footer from '../Components/Pages/Footer/Footer';

const Main = () => {
    return (
        <div>
            <Header/>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;