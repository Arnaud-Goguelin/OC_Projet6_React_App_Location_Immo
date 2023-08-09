import { Link, NavLink } from 'react-router-dom'
import Logo from '../../assets/images/logo.png'
import './header.scss'

function Header() {

    return (
        <header className='header'>
            <Link className='header__logo' to='/'><img src={Logo} alt='Logo de Kasa' aria-label={`Aller à la page d\'accueil`}/></Link>
            <nav>
                <NavLink className='header__link' to='/' aria-label={`Aller à la page d\'accueil`}>Accueil</NavLink>
                <NavLink className='header__link' to='/about' aria-label={`Aller à la page "A propos"`}>A propos</NavLink>
            </nav>
        </header>
    )

}

export default Header