import { Link } from 'react-router-dom'
import './thumb.scss'

function Thumb({title, cover, id}) {

    return(
        <>
        <Link
        to={`/Housing/${id}`} 
        className='housingGallery__thumb' 
        style={{backgroundImage : `url(${cover})`}}
        >
            <div className='thumb__overShadow'></div>
            <p className='thumb__text'>{title}</p>
        </Link>
        </>
    )
}

export default Thumb