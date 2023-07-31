import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const HelpLayout = () => {
    return (
        <div className='help-layout'>
            <h2>Help Center</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni sit repellat, perferendis officiis fugit aut.</p>
            
            <nav>
                <NavLink to="faq">FAQs</NavLink>
                <NavLink to="contact">Contact Us</NavLink>
            </nav>

            <Outlet />
        </div>
    );
}

export default HelpLayout;
