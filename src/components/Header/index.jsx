import { Link } from 'react-router-dom'
import logo from '../../assets/kasa-logo.png'

import '../../styles/css/header.css'; 

function Header() {
    return (
        <header>
            <img className='kasa-logo' src={logo} alt={`kasa logo`} />
            <nav>
                <Link class="kasa-nav-link kasa-nav-link-active" to="/">Accueil</Link>
                <Link class="kasa-nav-link" to="/a-propos">À Propos</Link>
            </nav>
        </header>
    )
}

export default Header