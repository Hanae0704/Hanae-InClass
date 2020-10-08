import React from 'react';
import { BrowserRouter } from 'react-router-dom';

/* Components ---------------------------*/
import Content from './Shared/Content.jsx';
import Header from './Shared/Header.jsx';
import Footer from './Shared/Footer.jsx';
import Nav from './Shared/Nav.jsx';


const Main = () => {

    return (
        <div className='Main'>
            <BrowserRouter>
            <h1>In Class</h1>

            <Nav/>
            <Header/>
            <Content/>
            <Footer/>

            </BrowserRouter>
        </div>
    );
}

export default Main;