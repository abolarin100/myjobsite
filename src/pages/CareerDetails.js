import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const CareerDetails = () => {

    const { id } = useParams()
    const career = useLoaderData()
    return (
        <div className='career-details'>
            <h2> Career Details for { career.title }</h2>
            <p>Starting salary: {career.salary}</p>
            <p>Location: {career.location}</p>
            <div className="details">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere, commodi? Voluptate blanditiis nihil, dolore adipisci architecto aspernatur. Odit vero, quas eligendi distinctio reiciendis laborum molestiae ullam quasi pariatur voluptatem. Provident est doloribus dolorem natus accusamus quo inventore minus a. Alias.</p>
            </div>
            
        </div>
    );
}

export default CareerDetails;


export const careerDetailsLoader = async ({ params }) => {
    const { id } = params

    const res = await fetch("https://my-json-server.typicode.com/abolarinJerry/careersDb/careers" + id)

    if (!res.ok) {
        throw Error("Opps!! page not available")
    }

    return res.json()
}