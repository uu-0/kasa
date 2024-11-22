import React from 'react'

import RedStar from '../assets/RedStar.svg'
import WhiteStar from '../assets/WhiteStar.svg'

import '../styles/css/rating.css'

function Rating({ rating }) {
    const maxStars = 5

    const redStars = parseInt(rating)

    const whiteStars = maxStars - redStars

    return (
        <div className="rating-bloc">
            {Array.from({ length: redStars }, (index) => (
                <img 
                    key={`red-star-${index}`} 
                    src={RedStar} 
                    alt="Red Star" 
                    className="star" 
                />
            ))}

            {Array.from({ length: whiteStars }, (index) => (
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
