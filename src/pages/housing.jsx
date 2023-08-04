import { useContext } from 'react'
import { DataContext } from '../utils/context';
import { useParams } from 'react-router-dom';
import Carousel from '../components/secondaryComponents/housingCarousel'
import Introduction from '../components/secondaryComponents/housingIntroduction';
import Dropdown from '../components/secondaryComponents/dropdown';

function Housing() {

    const { id } = useParams()
    const { data, isLoading, error } = useContext(DataContext)

    if (error) {
        return <span>Il y a eu un problème: {error}</span>
      }

    return(
        <>
            { isLoading ? 
                (<span key={`${id}+${error}`}>Patientez, chargement des données</span>)
                :       
                (<>
                    {data.filter(rental => rental.id === id)
                    .map(({ id, pictures, title, location, tags, host, rating, description, equipments}) =>(
                        <>
                            <Carousel 
                                key={pictures.indexOf()}
                                pictures={pictures}
                            />
                            <Introduction 
                                key={id}
                                title={title}
                                location={location}
                                tags={tags}
                                host={host}
                                rating={rating}
                            />
                            <Dropdown
                            data={data}
                            description={description}
                            equipments={equipments}
                            />
                        </>
                    ))} 
                </>)
            }
        </>
    )

}

export default Housing