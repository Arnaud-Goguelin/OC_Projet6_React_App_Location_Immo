import { Link } from 'react-router-dom'
import Logo from '../assets/images/logo.png'
import '../assets/style/header.css'

function Header() {

    return (
        <div className='header'>
        <Link to='/'><img src={Logo} alt='Logo de Kasa' /></Link>
        <nav>
            <Link className='header__link' to='/'>Accueil</Link>
            <Link to='/about'>A propos</Link>
        </nav>
        </div>
    )

}

export default Header