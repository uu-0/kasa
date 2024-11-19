import React from 'react';
import Banner from '../components/Banner';
import LogementBloc from '../components/LogementBloc';


import '../styles/css/accueil.css';

function Accueil() {
    return (
        <React.Fragment>
            <Banner />
            <LogementBloc />
        </React.Fragment>
       
    );
}

export default Accueil;
