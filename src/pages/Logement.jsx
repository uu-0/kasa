import React from 'react'
import { useParams } from 'react-router-dom'
import { Navigate } from 'react-router-dom'


import Carousel from '../components/Carrousel'
import Dropdown from '../components/Dropdown'
import Rating from '../components/Rating'
import Tags from '../components/Tags'

import annonces from '../data/annonces.json'

import '../styles/css/logement.css'
import '../styles/css/dropdown.css'


function Logement() {
    const { id } = useParams();

    const annonce = annonces.find((annonce) => annonce.id === id);

    if (!annonce) {
        return <Navigate to="*" />
    }

    return (
        <React.Fragment>
            <Carousel pictures={annonce.pictures} />
            <div className='logement-information-bloc'>
                <div className='logement-information-bloc-left'>
                    <h1>{annonce.title}</h1>
                    <h2>{annonce.location}</h2>
                    <Tags tags={annonce.tags} />
                </div>
                <div className='logement-information-bloc-right'>
                    <div className='logement-information-host'>
                        <p>{annonce.host.name}</p>
                        <img className='host-img' src={annonce.host.picture} alt={annonce.host.name} />
                    </div>
                    <Rating rating={annonce.rating} />
                </div>
            </div>
            <div className='logement-dropdown-bloc'>
                <Dropdown 
                        className="dropdown-menu-logement"
                        title="Description" 
                        description={annonce.description}
                />
                <Dropdown 
                        className="dropdown-menu-logement"
                        title="Équipements" 
                        description={annonce.equipments.map((equipment, index) => (
                            <p key={index}>{equipment}</p>
                        ))}
                />
            </div>
        </React.Fragment>
    );
}

export default Logement;
