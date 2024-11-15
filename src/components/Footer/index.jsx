import logo from '../../assets/kasa-logo-white.svg'

import '../../styles/css/footer.css'; 

function Footer() {
    return (
        <footer>
            <img className='kasa-logo' src={logo} alt={`kasa logo`} />
            <p>© 2020 Kasa. All rights reserved</p>
        </footer>
    )
}

export default Footer