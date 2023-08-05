import { useContext } from 'react'
import { DataContext } from '../utils/context';
import { useParams } from 'react-router-dom';
import Carousel from '../components/secondaryComponents/housingCarousel'
import Introduction from '../components/secondaryComponents/housingIntroduction';
import Dropdown from '../components/secondaryComponents/dropdown';
import '../assets/style/primaryComponentsStyle/housing.scss'

function Housing() {

    const { id } = useParams()
    const { data, isLoading, error } = useContext(DataContext)

    if (error) {
        return <span>Il y a eu un problème: {error}</span>
      }

    return(
        <>
            { isLoading ? 
                (<span>Patientez, chargement des données</span>)
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
                                key={`${id}-Introduction`}
                                title={title}
                                location={location}
                                tags={tags}
                                host={host}
                                rating={rating}
                            />
                            <div className='Housing__dropwdownContainer'>
                                <Dropdown
                                    key={`${id}-Description`}
                                    dropdownTitle={'Description'}
                                    dropdownContent={description}
                                />
                                <Dropdown
                                key={`${id}-Equipements`}
                                    dropdownTitle={'Equipements'}
                                    dropdownContent={equipments}
                                />
                            </div>
                        </>
                    ))} 
                </>)
            }
        </>
    )

}

export default Housing