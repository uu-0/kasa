import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import '../styles/css/logementCards.css';

function Card({ id, title }) {
    return (
        <Link to={`/logement/${id}`} className="logement-card">
            {/* <img src={cover} alt={title} className="logement-card-image" /> */}
            <h3 className="logement-card-title">{title}</h3>
        </Link>
    );
}

export default Card;
