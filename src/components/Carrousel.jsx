import React from 'react'
import { useState } from 'react'

import '../styles/css/carrousel.css'


function Carousel({ pictures }) {
    //état pour suivre l'index de l'image affichée
    const [currentIndex, setCurrentIndex] = useState(0)

    const totalPictures = pictures.length
  

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPictures)
    }

    const prevImage = () => {
        setCurrentIndex(
        (prevIndex) => (prevIndex - 1 + totalPictures) % totalPictures
        )
    }

    return (
        <div className="carousel">
            <img src={pictures[currentIndex]} alt="Carousel" className="carousel-image" />
            <p className='carousel-counter-pictures'>
                {currentIndex+1}/{totalPictures}
            </p>
            <button onClick={prevImage} className="carousel-button prev-button">
            </button>
            <button onClick={nextImage} className="carousel-button next-button">  
            </button>
        </div>
    )
}

export default Carousel;
