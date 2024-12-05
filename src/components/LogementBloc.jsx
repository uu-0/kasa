import React from 'react';

import Card from './Card';

import annonces from '../data/annonces.json'

import '../styles/css/logementCards.css';

function LogementBloc() {

    return (
        <div className="logements-grid" >
                {annonces.map((annonce) => (
                    <Card
                        key={annonce.id}
                        id={annonce.id}
                        title={annonce.title}
                        cover={annonce.cover}
                    />
                ))}
	</div> 
    )
}


export default LogementBloc;
