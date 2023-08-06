import { Link } from 'react-router-dom'
import './thumb.scss'

function Thumb({title, cover, id, location}) {

    return(
        <figure className='housingGallery__thumb' >
            <Link to={`/Housing/${id}`} >
                <img className='thumb__image' src={`${cover}`} alt={`${title} - ${location}`}/>
                <figcaption className='thumb__text'>{title}</figcaption>
            </Link>
        </figure>
    )
}

export default Thumb