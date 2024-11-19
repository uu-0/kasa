import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

import annonces from '../data/annonces.json'

import '../styles/css/logementCards.css';

function LogementBloc() {
    const firstSixAnnounces = annonces.slice(0, 6);

    return (
        <div className="logements-grid" key={annonces.id}>
                {firstSixAnnounces.map((annonce) => (
                    <Card
                        key={annonce.key}
                        id={annonce.id}
                        title={annonce.title}
                    />
                ))}
	</div> 
    )
}

LogementBloc.propTypes = {
    key: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

export default LogementBloc;
