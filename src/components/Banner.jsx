import React from 'react'
import '../styles/css/banner.css'

function Banner({ backgroundImage, showText = true }) {
    return (
        <React.Fragment>
            <div 
                className='kasa-accueil-bloc' 
                style={{ backgroundImage: `url(${backgroundImage})` }}
            />
            <div className='kasa-accueil-bloc-filter'>
                {showText && (
                    <div className="text-container">
                        <span className="outline">Chez vous, partout et ailleurs</span>
                        <span className="fill">Chez vous, partout et ailleurs</span>
                    </div>
                )}
            </div>
        </React.Fragment>
    )
}

export default Banner
