import React, { useState, useEffect } from 'react';
import './Header.css';
import SearchBar from '../SearchBar/SearchBar';

import logo from '../../assets/logo.png';

const Header = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='header'>
            {isMobile ? (
                <div className='header-mobile'>
                    <div className='header-top'>
                        <div className='header-sides'>
                            <a href='#home'><i className='ri-menu-line'></i></a>
                            <a href='#merda'><img className='header-logo' src={logo} alt='JM Carpintaria' /></a>
                        </div>
                        <div className='header-sides'>
                            <a href='#about'><i className='ri-user-line'></i></a>
                            <a href='#contact'><i className='ri-shopping-cart-2-line'></i></a>
                        </div>
                    </div>
                    <div className='header-bottom'>
                        <SearchBar />
                    </div>
                </div>
            ) : (
                <div className='header-desktop'>
                    <div className='header-top' id='header-top-desktop'>
                        <div className='header-sides'>
                            <a href='#home'><i className='ri-menu-line'></i></a>
                            <a href='#merda'><img className='header-logo' src={logo} alt='JM Carpintaria' /></a>
                        </div>
                        <SearchBar />
                        <div className='header-sides'>
                            <a href='#about'><i className='ri-user-line'></i></a>
                            <a href='#contact'><i className='ri-shopping-cart-2-line'></i></a>
                        </div>
                    </div>
                    <div className='header-bottom'>
                        <div className='header-bottom-menu'>
                            <div className='header-drop-wrapper'>
                                <a href='#seila' className='header-drop'>
                                    <span>KIT PORTAS <strong id='arrow-down'>&#709;</strong></span>
                                </a>
                                <div className='header-drop-menu'>
                                    <a href='#seila'>KIT Portas</a>
                                    <a href='#seila'>Portas</a>
                                    <a href='#seila'>Batentes</a>
                                    <a href='#seila'>Guarnições</a>
                                </div>
                            </div>
                            <a href='#seila'><span>RODAPÉS</span></a>
                            <a href='#seila'><span>SERVIÇOS</span></a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Header;
