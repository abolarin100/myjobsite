import React from 'react';
import { useLoaderData, Link } from 'react-router-dom';


const Careers = () => {

    const careers = useLoaderData()
    return (
        <div className='careers'>
            {careers.map(career => (
                <Link to={career.id.toString()} key={career.id}>
                    <p>{career.title}</p>
                    <p>Based in {career.location}</p>
                </Link>
            ))}
        </div>
    );
}

export default Careers;



// loader function here:
export const careersLoader = async () => {
    const res = await fetch("https://my-json-server.typicode.com/abolarinJerry/careersDb/careers")

    if (!res.ok) {
        throw Error("Opps! not available")
    }

    return res.json()
}