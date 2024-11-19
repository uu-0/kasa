import { NavLink } from 'react-router-dom';
import logo from '../assets/kasa-logo-red.svg';
import '../styles/css/header.css';

function Header() {
    return (
        <header>
            <img className='kasa-logo' src={logo} alt={`kasa logo`} />
            <nav>
                <NavLink
                    className={({ isActive }) => isActive ? "kasa-nav-link kasa-nav-link-active" : "kasa-nav-link"}
                    to="/"
                >
                    Accueil
                </NavLink>
                <NavLink
                    className={({ isActive }) => isActive ? "kasa-nav-link kasa-nav-link-active" : "kasa-nav-link"}
                    to="/a-propos"
                >
                    À Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header;
