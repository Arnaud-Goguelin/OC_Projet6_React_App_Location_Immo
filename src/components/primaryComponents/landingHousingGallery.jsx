import { useContext } from 'react';
import { DataContext } from '../../utils/context';
import Thumb from '../secondaryComponents/thumb'
import '../../assets/style/primaryComponentsStyle/housingBackground.scss'



function HousingGallery() {

    const { data, isLoading, error } = useContext(DataContext)

    if (error) {
        return <span>Il y a eu un problème: {error}</span>
      }

    return(
        <section className='housingGallery'>
            { isLoading ? 
            (<span>Patientez, chargement des données</span>)
            :       
            (<>
            { /* l'usage de filter ici permettra à l'avenir de trier les locations à afficher selon d'autres critères que leur position dans la base de donnée, autrement un data.slice(0,9) aurait suffit
            On limite volontairement le nombre d'affichage. Ici, avec 20 locations, l'affichage est encore correct pour l'utilisateur, mais si la base de données s'étoffz (ex: booking.com), Kasa va perdre en performances et être inadaptée dans son utilisation*/ }
                {data.filter(rental => data.indexOf(rental) < 9 ).map(({id, title, cover, host}) => (
                    <Thumb
                    key={id}
                    title={title}
                    cover ={cover}
                    host={host.name}
                    />
                ))}
            </> )
            }
        </section>
    )
}

export default HousingGallery

// pour la mise en page de la galerie, il est possible de sélectionner le dernier thumb pour lui placer une class particulière : "n child 2n" ou "3n+1 child . lastchild"