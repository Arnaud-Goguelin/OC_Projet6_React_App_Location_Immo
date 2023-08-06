import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './header.scss'

function Header() {

    return (
        <header className='header'>
        <Link to='/'><img src={Logo} alt='Logo de Kasa' /></Link>
        <nav>
            <NavLink className='header__link' to='/'>Accueil</NavLink>
            <NavLink className='header__link' to='/about'>A propos</NavLink>
        </nav>
        </header>
    )

}

export default Header