import React from 'react';
import { Outlet } from 'react-router-dom';


const CareersLayout = () => {
    return (
        <div className='careers-layout'>
            <h2>Career Opporturnities</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro non error culpa incidunt perspiciatis eum, ratione sapiente ea pariatur commodi quisquam asperiores omnis aliquid consequatur?</p>
            


            <Outlet />
        </div>
    );
}

export default CareersLayout;
