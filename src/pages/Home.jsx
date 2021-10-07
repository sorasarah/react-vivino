import React from 'react';
import Navbar from '../components/Navbar';
import Wine from '../components/Wine';

const Home = () => {
    return (
        <div className="container">
            <Navbar />
            <Wine />
        </div>
    );
};

export default Home;