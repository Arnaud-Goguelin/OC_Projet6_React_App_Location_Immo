import { useContext } from 'react'
import { DataContext } from '../../utils/context';
import { useParams, Navigate } from 'react-router-dom';
import Carousel from '../../components/housingCarousel/housingCarousel'
import Introduction from '../../components/housingIntroduction/housingIntroduction';
import Dropdown from '../../components/dropdown/dropdown';
import './housing.scss'

function Housing() {

    const { id } = useParams()
    const { data, isLoading, error } = useContext(DataContext)
   
    
    if (isLoading) {
        return (
            <span>Patientez, chargement des données</span>
        )
    }

    if (error) {
        return <span>Il y a eu un problème: {error}</span>
    }

    if (data) {
        const rental = data.find(rental => rental.id === id)
        
        if (rental != undefined) {
            
            return (
                <section key={`${rental.id}-Housing`}>
                    <Carousel 
                        key={rental.pictures.indexOf()}
                        pictures={rental.pictures}
                    />
                    <Introduction 
                        key={`${rental.id}-Introduction`}
                        title={rental.title}
                        location={rental.location}
                        tags={rental.tags}
                        host={rental.host}
                        rating={rental.rating}
                    />
                    <div className='Housing__dropwdownContainer'>
                        <div>
                        <Dropdown
                            key={`${id}-Description`}
                            dropdownTitle={'Description'}
                            dropdownContent={rental.description}
                        />
                        </div>
                        <div>
                        <Dropdown
                            key={`${rental.id}-Equipements`}
                            dropdownTitle={'Equipements'}
                            dropdownContent={rental.equipments}
                        />
                        </div>
                    </div>
                </section>
            )
        } else {
            return <Navigate to='/error' />
        }
    }

    // return(
    //     <>
    //         { isLoading ? 
    //             (<span>Patientez, chargement des données</span>)
    //             :       
    //             (
                
    //             {/* utiliser data.find pour retrouver l'élément sélectionné, et mettre en place une gestion d'erreur */}
    //                 // data.filter(rental => rental.id === id)
    //                 // .map(({ id, pictures, title, location, tags, host, rating, description, equipments}) =>(

    //                 if (rental != 'undefined'){ 
    //                 {id, pictures, title, location, tags, host, rating, description, equipments} = rental
    //                     <section key={`${id}-Housing`}>
    //                         <Carousel 
    //                             key={pictures.indexOf()}
    //                             pictures={pictures}
    //                         />
    //                         <Introduction 
    //                             key={`${id}-Introduction`}
    //                             title={title}
    //                             location={location}
    //                             tags={tags}
    //                             host={host}
    //                             rating={rating}
    //                         />
    //                         <div className='Housing__dropwdownContainer'>
    //                             <div>
    //                             <Dropdown
    //                                 key={`${id}-Description`}
    //                                 dropdownTitle={'Description'}
    //                                 dropdownContent={description}
    //                             />
    //                             </div>
    //                             <div>
    //                             <Dropdown
    //                             key={`${id}-Equipements`}
    //                                 dropdownTitle={'Equipements'}
    //                                 dropdownContent={equipments}
    //                             />
    //                             </div>
    //                         </div>
    //                     </section>
    //                     } else {
    //                         <span>error</span>
    //                     })
    //                 // )
    //             }
    //     </>
    // )

}

export default Housing