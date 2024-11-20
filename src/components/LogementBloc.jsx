import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import annonces from '../data/annonces.json'

import '../styles/css/logementCards.css';

function LogementBloc() {
    const firstSixAnnounces = annonces.slice(0, 6);

    return (
        <div className="logements-grid" >
                {firstSixAnnounces.map((annonce) => (
                    <Card
                        key={annonce.id}
                        id={annonce.id}
                        title={annonce.title}
                    />
                ))}
	</div> 
    )
}


export default LogementBloc;
