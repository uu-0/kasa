import React from 'react';
import { useParams } from 'react-router-dom';
import annonces from '../data/annonces.json';

function Logement() {
    //récupère l'id depuis les paramètres d'URL
    const { id } = useParams();

    //cherche l'annonce correspondant à l'ID
    const annonce = annonces.find((annonce) => annonce.id === id);

    if (!annonce) {
        return <h1>Logement non trouvé</h1>;
    }

    return (
        <div>
            <h1>{annonce.title}</h1>
            <p>{annonce.description}</p>
            <ul>
                {annonce.tags.map((tag, index) => (
                    <li key={index}>{tag}</li>
                ))}
            </ul>
        </div>
    );
}

export default Logement;
