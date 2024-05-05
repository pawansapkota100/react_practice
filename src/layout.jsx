import React from 'react';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import { Outlet } from 'react-router-dom';

function layout(props) {
    return (
        <div>
            <Header/>
            <Outlet/>
            <Footer/>
        </div>
    );
}

export default layout;