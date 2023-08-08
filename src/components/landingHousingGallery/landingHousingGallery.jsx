import { useContext, useState } from 'react';
import { DataContext } from '../../utils/context';
import Thumb from '../thumbs/thumb'
import Pagination from '../pagination/pagination';
import './housingBackground.scss'

function HousingGallery() {

    const { data, isLoading, error } = useContext(DataContext)

    //Gestion de la pagination, il suffit de modifier limitPerPage (nb d'éléments affichés par page) 
    //pour changer le nombre de page et les boutons de navigations associés.
    // La page en cours "currentPage" est initié à 1 pour éviter la page 0.
    const limitPerPage = 6
    const [ currentPage, setPage ] = useState(1)
    
    let maxPage = null
    function defineMaxPage() {
        isLoading? maxPage=null : maxPage = Math.ceil(data.length / limitPerPage)}
    defineMaxPage()

    // Créer un tableau pages permet d'itérer dessus pour générer automatiquement les boutons de la pagination.
    // Le nombre de page nécessaires est définit en fonction du nombre d'objet à afficher et du nombre d'objets maximum à afficher par page.
    let pages=[]
    function completePages() {
        for (let p = 1; p <= maxPage; p++) {pages.push(p)}}
    completePages()

    //Gestion de la navigation dans la pagination
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
                <Pagination 
                    className="pagination"
                    pages={pages}
                    currentPage={currentPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    selectPage={selectPage}
                />
            {/* On récupère de la base de données les objets à afficher à partir de l'index équivalent à la page en cours 
            (currentPage -1 car useState est initié à 1 pour éviter la page 0), 
            et jusqu'à l'index équivalent à la limite à afficher par page x la page en cours. 
            Ainsi on affiche les éléments par tranche égale à la limite d'objets à afficher par page*/}
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
            </> )
            }
        </section>
    )
}

export default HousingGallery