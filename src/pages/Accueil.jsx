import React from 'react';
import Banner from '../components/Banner';
import LogementBloc from '../components/LogementBloc';

import KasaBg from '../assets/kasa-accueil.png'


function Accueil() {
    return (
        <React.Fragment>
            <Banner 
                backgroundImage={KasaBg}
                showText={true} 
            />
            <LogementBloc />
        </React.Fragment>
       
    );
}

export default Accueil;
