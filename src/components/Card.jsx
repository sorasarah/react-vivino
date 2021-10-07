import React from 'react';

const Card = (props) => {
    const { name, description, grapes, country, region, year, picture } = props.vin;

    return (
        <div className="lobby-container">
            <div className="wine-card">
                <h2>{name}</h2>
                <div className="infos">
                    <p>{grapes}</p>
                    <p>{country}</p>
                    <p>{year}</p>
                </div>
                <div className="description">
                    <div className="texte">
                        <h3>{region}</h3>
                        <p>{description}</p>
                    </div>
                <img src= {"./media/" +picture} alt="Photo-vin" />
                </div>
            </div> 
        </div>
    );
};

export default Card;