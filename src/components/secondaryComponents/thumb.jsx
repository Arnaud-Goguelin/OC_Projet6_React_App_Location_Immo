import { Link } from 'react-router-dom'
import '../../assets/style/secondarycomponentsStyle/thumb.scss'

function Thumb({title, cover, id}) {

    return(
        <>
        <Link
        to={`/Housing/${id}`} 
        className='housingGallery__thumb' 
        style={{backgroundImage : `url(${cover})`}}
        >
            <div className='thumb__overShadow'></div>
            <div className='thumb__text'><p>{title}</p></div>
        </Link>
        </>
    )
}

export default Thumb