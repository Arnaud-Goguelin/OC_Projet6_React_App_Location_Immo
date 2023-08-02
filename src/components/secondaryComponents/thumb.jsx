import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DataContext } from '../../utils/context';
import '../../assets/style/secondarycomponentsStyle/thumb.scss'

function Thumb({title, cover}) {

    const { data, isLoading, error } = useContext(DataContext)
    const backGroundimage= {backgroundImage : `url(${cover})`}

    return(
        <>
        { isLoading ? 
            (<span>Patientez, chargement des données</span>)
            :       
        (<Link className='housingGallery__thumb' style={backGroundimage} to="/Housing">
            <div className='thumb__overShadow'></div>
            <div className='thumb__text'><p>{title}</p></div>
        </Link>
        )}
        </>
    )
}

export default Thumb