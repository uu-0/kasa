import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/css/logementCards.css';

function Card({ id, title, cover }) {
    return (
        <Link to={`/logement/${id}`} className="logement-card">
            <img src={cover} alt={title} className="logement-card-image" />
            <h3 className="logement-card-title">{title}</h3>
        </Link>
    );
}

export default Card;
