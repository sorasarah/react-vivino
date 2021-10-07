import React, { useEffect, useState} from 'react';
import { findAllWines } from '../services/winesAPI';
import Card from './Card';

const Wine = () => {

    const [wines, setWines] = useState([]);

    //pour charger une fois l'API
    const [playOnce, setPlayOnce] = useState(true);

    //radio select
    const[selectRadio, setSelectRadio] = useState("");
    const radios = ["Riojo", "California", "Washington", "Oregon", "Tuscany", "Bordeaux", "Mendoza", "Bourgogne", "Gigondas"];
    
    //filtre select
    const [selectFiltre, setSelectFiltre] = useState("");
    const filtre =["France", "USA", "Italie", "Espagne", "Argentine"];

    //filtrer 
    const [search, setSearch] = useState("");
    const filteredWine = wines.filter((w) =>
    w.name.toLowerCase().includes(search.toLowerCase()));

    

    //récupérer les données de l'api
    const fetchWines = async() => {
        try {
            const data = await findAllWines();
            setWines(data);
            console.log("coucou");
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        //condition d'un seul chargelent 
        if (playOnce) {
            fetchWines(); 
            setPlayOnce();
        }
    }, [])

    return (
        <div className="lobby-container">
            
            <div className="menu">
                <div className="recherche">
                    <button className="search"><i class="fas fa-search"></i></button>
                    <input type="text" placeholder="Recherche" value={search} onChange={(e) => setSearch(e.target.value)}/>
                </div>
                <div className="pays-search">
                     <button><i class="fas fa-globe-europe"></i></button>
                     <select name="country" id="country" >
                         <option value="pays">Pays</option>
                     {filtre.map((pays) => {
                         return(
                             <option key={pays} id={pays} value={pays} selected={pays === selectFiltre} onChange={(element) => setSelectFiltre(element.target.value)}>{pays}</option>
                         )
                     })}
                     </select>
                     
                </div>
                <div className="radio-container">
                    <div className="btn"><button><i class="fas fa-wine-glass-alt"></i></button></div>
                    <ul className="check">
                        {radios.map((radio) => {
                                return(
                                    <li key={radio}>
                                        <div className="pose">
                                        <input type="radio" value={radio} id={radio} checked={radio === selectRadio} onChange={(event) => setSelectRadio(event.target.value)} />
                                        <label htmlFor={radio}>{radio}</label>
                                        </div>
                                    </li>
                                )
                        })}
                    </ul>
                </div>
                {/* ANNULER LA RECHERCHE */}
                <div className="cancel">
                       {selectRadio && (<h5 onClick={() => setSelectRadio("")}>Annuler la recherche</h5>)}
                </div>
                
            </div>
            <div className="wine-contain">
                <h1>Liste des Vins</h1>
            {filteredWine.length > 0 ? (
                <div className="wine-list">
                    {filteredWine
                    .filter((vin) => vin.region.includes(selectRadio))
                    .filter((vin) => vin.country.includes(selectFiltre))
                    .map((vin)=>(
                        <div key={vin.id}>
                             <Card vin={vin} />
                        </div>
                    ))}
                </div> 
            ) : ( <h3 className="zero-result">Aucun résultat trouvé...</h3>)}
              
              </div>
       </div>
    );
};

export default Wine;