import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div>
            <h2>You're in the wrong domain</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem modi nam deleniti odio, veritatis accusantium possimus non molestias ipsa maxime deserunt quae laudantium expedita accusamus consectetur inventore dolore reiciendis laboriosam?</p>


            <p>Back to the <Link to="/">Homepage</Link>.</p>
        </div>
    );
}

export default NotFound;
