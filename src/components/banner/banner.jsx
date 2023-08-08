import './banner.scss'
import Cliff from '../../assets/images/cliff.avif'
import Mountain from '../../assets/images/mountain.avif'
import { useParams } from 'react-router-dom'

function Banner() {

    const { about } = useParams()
    {console.log(about)}

    return(
        <figure className='banner__container'>
            <img
                src={about === 'about' ? Mountain : Cliff} 
                alt={about === 'about' ? 'Image d\'une Montagne' :'Image d\'une falaise' }
            />
            { about === 'about' ? null : <figcaption>Chez vous, partout et ailleurs</figcaption>}
        </figure>
    )
}

export default Banner 