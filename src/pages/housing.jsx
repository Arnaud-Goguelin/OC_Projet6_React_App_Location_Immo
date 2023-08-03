import { useContext } from 'react'
import { DataContext } from '../utils/context';
import { useParams } from 'react-router-dom';
import Carousel from '../components/secondaryComponents/carousel'

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
                {data.filter(rental => rental.id === id).map(({id, pictures}) =>(
                    <Carousel 
                    key={id}
                    pictures={pictures}
                    />
                ))}
                </>)
            }
        </>
    )

}

export default Housing