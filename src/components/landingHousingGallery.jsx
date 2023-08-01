import Thumb from './thumb'
// import ThumbBackGround from './housingGalleryBackGround';
import useFetch from '../utils/useFetch'

function HousingGallery() {

    const { data, isLoading, error } = useFetch('http://localhost:3000/housing.json');

    if (error) {
        return <span>Il y a eu un problème</span>
      }

    return(
        <section>
            { isLoading ? 
            (<span>Patientez, chargement des données</span>)
            :       
            (<div>
                {data.map(rental => (
                    <Thumb
                    key={rental.id} 
                    />
                ))}
            </div> )
            }
        </section>
    )
}

export default HousingGallery