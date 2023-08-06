import { useContext, useState } from 'react';
import { DataContext } from '../../utils/context';
import Thumb from '../thumbs/thumb'
import Pagination from '../pagination/pagination';
import './housingBackground.scss'

function HousingGallery() {

    const { data, isLoading, error } = useContext(DataContext)

    //Gestion de la pagination, il suffit de modifier limitPerPage (nb d'éléments affichés par page) pour changer le nombre de page et les boutons de navigations associés
    const limitPerPage = 6
    const [ currentPage, setPage ] = useState(1)
    let maxPage = null

    function defineMaxPage() {
        isLoading? maxPage=null : maxPage = Math.ceil(data.length / limitPerPage)
    }

    defineMaxPage()


    function previousPage() {currentPage === 1 ? setPage(maxPage) : setPage(currentPage - 1)}
    function selectPage(p) {setPage(p)}
    function nextPage() {currentPage === maxPage ? setPage(1) : setPage(currentPage + 1)}

    if (error) {
        return <span>Il y a eu un problème: {error}</span>
      }

    return(
        <section className='housingBackground' >
            { isLoading ? 
            (<span>Patientez, chargement des données</span>)
            :       
            (<>
                {data.slice(limitPerPage*(currentPage - 1), limitPerPage*(currentPage))
                .map(({id, title, cover, location}) => (
                    <Thumb
                    key={id}
                    id={id}
                    title={title}
                    cover ={cover}
                    location={location}
                    />
                ))}
                <Pagination className="pagination"
                    key={`page n°${currentPage}`}
                    maxPage={maxPage}
                    currentPage={currentPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    selectPage={selectPage}
                />
            </> )
            }


        </section>
    )
}

export default HousingGallery

// pour la mise en page de la galerie, il est possible de sélectionner le dernier thumb pour lui placer une class particulière : "n child 2n" ou "3n+1 child . lastchild"