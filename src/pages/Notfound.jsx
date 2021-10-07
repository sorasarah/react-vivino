import React from 'react';
import Navbar from '../components/Navbar';

const Notfound = () => {
    return (
        <div>
            <Navbar />
            <h1>Désolé ! Page introuvable</h1>
            <h2>Veuillez vérifier l'url !</h2>
        </div>
    );
};

export default Notfound;