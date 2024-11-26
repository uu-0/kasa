import React from 'react'
import { useParams } from 'react-router-dom'


import RedStar from '../assets/RedStar.svg'
import WhiteStar from '../assets/WhiteStar.svg'

import annonces from '../data/annonces.json'

import '../styles/css/rating.css'

function Rating({ rating }) {
    const maxStars = 5

    const redStars = parseInt(rating)

    const whiteStars = maxStars - redStars

    //récupère l'id depuis les paramètres d'URL
    const { id } = useParams();

    //cherche l'annonce correspondant à l'ID
    const annonce = annonces.find((annonce) => annonce.id === id);

    return (
        <div className="rating-bloc">
            {Array.from({ length: redStars }, (_, index) => (
                <img  
                    key={`red-star-${index}`}
                    src={RedStar} 
                    alt="Red Star" 
                    className="star" 
                />
            ))}

            {Array.from({ length: whiteStars }, (_, index) => (
                <img 
                    key={`white-star-${index}`}
                    src={WhiteStar} 
                    alt="White Star" 
                    className="star" 
                />
            ))}
        </div>
    );
}

export default Rating;
