import React from 'react';

const Home = () => {
    return (
        <div className='home'>
            <h2>Welcome</h2>


           <section>
           <div className="image">
            <img src="https://images.pexels.com/photos/162625/grinder-hitachi-power-tool-flexible-162625.jpeg?auto=compress&cs=tinysrgb&w=600" height="300px" alt="banner" />
            </div>

            <div className="text">
                <h4>Find the best job</h4>
                <p>Search millions of jobs and find the one that is best fit for you.</p>
                <button className='button'><a href="/careers">Go to careers</a></button>
            </div>
           </section>

           
            
        </div>
    );
}

export default Home;
