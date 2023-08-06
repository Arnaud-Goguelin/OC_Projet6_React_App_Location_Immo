import '../../assets/style/secondarycomponentsStyle/banner.scss'
import Cliff from '../../assets/images/cliff.avif'
import Mountain from '../../assets/images/mountain.avif'
import { useParams } from 'react-router-dom'

function Banner() {

    const { about } = useParams()

    return(
        <div className='banner__container'>
            <img 
                className='banner__image'
                src={about === 'about' ? Mountain : Cliff} 
                alt={about === 'about' ? 'Image d\'une Montagne' :'Image d\'une falaise' }
            />
            { about === 'about' ? null : <p>Chez vous, partout et ailleurs</p>}
        </div>
    )
}

export default Banner

// inclure la photo dans une <img> ce qui permettra de changer d'image en fonction de la page choisie (accueil ou about)
// permet d'ajouter le filtre sur l'image   