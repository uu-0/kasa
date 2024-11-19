import React from 'react'

import '../../styles/css/banner.css'


function Banner() {
    return (
            <React.Fragment>
                <div className='kasa-accueil-bloc'></div>
                <div className='kasa-accueil-bloc-filter'>
                    <div class="text-container">
                        <span class="outline">Chez vous, partout et ailleurs</span>
                        <span class="fill">Chez vous, partout et ailleurs</span>
                    </div>
                </div>
            </React.Fragment>
    )
}

export default Banner