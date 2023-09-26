import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const RootLayout = () => {
    const [menuVisible, setMenuVisible] = useState(false);

    const toggleMenu = () => {
        setMenuVisible(!menuVisible);
    };

    return (
        <div className="root-layout">
            <header className="header">
                <nav className="navbar">
                    <div className="logo">
                        <h1>JobSite</h1>
                    </div>
                    <div className={`nav-links ${menuVisible ? 'show' : ''}`}>
                        <NavLink to="/">Home</NavLink>
                        <NavLink to="about">About</NavLink>
                        <NavLink to="help">Help</NavLink>
                        <NavLink to="careers">Careers</NavLink>
                    </div>

                    <div className="menu-toggle" onClick={toggleMenu}>&#9776;</div>


                </nav>
            </header>

            <main>
                <Outlet />
            </main>
        </div>
    );
};

export default RootLayout;
