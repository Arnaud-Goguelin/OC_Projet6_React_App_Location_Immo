import logoWhite from '../../assets/images/logoWhite.png'
import '../../assets/style/secondarycomponentsStyle/footer.scss'

function Footer() {

    return (
        <div className='footer'>
        <img src={logoWhite} alt='Logo de Kasa' />
        <p>©2020 Kasa. All rights reserved</p>
        </div>
    )

}

export default Footer