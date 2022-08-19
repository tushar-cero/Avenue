import React from 'react';
import { Link } from 'react-router-dom';
import "./Error.css";

import Header from '../../components/Header/Header';
import NavigationSideDrawer from "../../components/NavigationSideDrawer/NavigationSideDrawer"

const Error = () => {

    window.onscroll = () => {};

    return (
        <React.Fragment>
            <Header/>
            <NavigationSideDrawer/>
            <article className='Error'>
                <div className='container'>
                    <div className='error_background background_image_contain'></div>
                    <div className='btn_container'>
                        <Link to='/'><div className='btn btn_primary'>BACK TO HOME</div></Link>
                    </div>
                </div>
            </article>
        </React.Fragment>
    );
};

export default Error;