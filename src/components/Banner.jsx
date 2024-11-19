import React from 'react'

import '../styles/css/banner.css'


function Banner() {
    return (
            <React.Fragment>
                <div className='kasa-accueil-bloc'></div>
                <div className='kasa-accueil-bloc-filter'>
                    <div class="text-container">
                        <span className="outline">Chez vous, partout et ailleurs</span>
                        <span className="fill">Chez vous, partout et ailleurs</span>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default Banner