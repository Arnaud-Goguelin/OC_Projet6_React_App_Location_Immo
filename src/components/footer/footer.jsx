import logoWhite from '../../assets/images/logoWhite.png'
import './footer.scss'

function Footer() {

    return (
        <footer className='footer'>
            <img src={logoWhite} alt='Logo de Kasa' />
            <p>©2020 Kasa. All rights reserved</p>
        </footer>
    )

}

export default Footer