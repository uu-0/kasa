import React from "react"
import { Link } from "react-router-dom"

import '../styles/css/error.css'

function Error() {
    return (
        <div className="error-bloc">
            <h1>404</h1>
            <h2>Oups! La page que vous demandez n'existe pas.</h2>
            <Link to={`/`} className="error-link">Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error