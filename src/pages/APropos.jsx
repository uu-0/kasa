import React from 'react';

import BannerAPropos from "../components/BannerAPropos"
import Dropdown from '../components/Dropdown';

import '../styles/css/dropdown.css'

function APropos() {
    return (
        <React.Fragment>
            <BannerAPropos />
            <div className='dropdown-bloc'>
                <Dropdown 
                    title="Fiabilité" 
                    description={'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'} 
                />
                <Dropdown 
                    title="Respect" 
                    description={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'} 
                />
                <Dropdown 
                    title="Service" 
                    description={'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance.'} 
                />
                <Dropdown
                    title="Sécurité"
                    description="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
                />
            </div>
        </React.Fragment>
    )
}

export default APropos