import { Link } from 'react-router-dom'

function Header() {
    return (
        <nav>
            <p>nav</p>
            <Link to="/">Home</Link>
            <Link to="/logement">Logement</Link>
            <Link to="/a-propos">À Propos</Link>
        </nav>
    )
}

export default Header