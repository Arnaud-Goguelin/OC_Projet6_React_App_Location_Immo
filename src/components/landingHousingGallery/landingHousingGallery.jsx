import { useContext, useState, useRef, useEffect } from 'react';
import { DataContext } from '../../utils/context';
import Thumb from '../thumbs/thumb'
import Pagination from '../pagination/pagination';
import './landingHousingGallery.scss'

function HousingGallery() {

    const { data, isLoading, error } = useContext(DataContext)

    // Gestion de la pagination, il suffit de modifier les valeurs de limitPerPage (nb d'éléments affichés par page), 
    // dans la fonction defineLimitePerPage ,pour changer le nombre de page et les boutons de navigations associés.
    // La page en cours "currentPage" est initié à 1 pour éviter la page 0.
    // limitPerPage est initiée à 1 pour éviter un boucle infine (division par limitPerPage dans defineMaxPage)
    const [ currentPage, setPage ] = useState(1)
    const [ limitPerPage, setLimit ] = useState(1)
    const housingBackgroundRef = useRef(null)
    let maxPage = null
    let pages=[]


    // La limite d'éléments à afficher par page est définit selon les medias queries (on récupère la valeur d'une variable CSS définit par nos soins).
    // A savoir pour les tests: sa bonne prise en compte nécessite un rechargement de la page, 
    // mais ce n'est pas gênant pour un utilisateur qui ne changera pas sa taille d'écran en cours d'utilisation.
    
    function defineLimitePerPage() {
        if (housingBackgroundRef.current != null) {
            const housingBackground =  getComputedStyle(housingBackgroundRef.current);
            const screenWidth = housingBackground.getPropertyValue('--screenWidth');
            screenWidth === 'desktop' ? setLimit(6) : setLimit(3);
        }
    }
     
    // Le nombre maximum de page est définit en divisant l'arrondi supérieur de la longueur de data divisé par la limite d'élément à afficher par page.
    function defineMaxPage() {
        isLoading ? maxPage = null : maxPage = Math.ceil(data.length / limitPerPage)}

    // Créer un tableau pages permet d'itérer dessus pour générer automatiquement les boutons de la pagination.
    // Le nombre de page nécessaires est définit en fonction du nombre d'objet à afficher et du nombre d'objets maximum à afficher par page.
    function completePages() {
        for (let p = 1; p <= maxPage; p++) {pages.push(p)}}

    // Gestion de la navigation dans la pagination
    function previousPage() {currentPage === 1 ? setPage(maxPage) : setPage(currentPage - 1)}
    function selectPage(p) {setPage(p)}
    function nextPage() {currentPage === maxPage ? setPage(1) : setPage(currentPage + 1)}

    // Appel des fonctions pour générer la pagination, puis l'affichage des composants.
    // On utilise useEffect pour n'appeler defineLimitePerPage qu'une fois, au 1er rendu du composant.
    useEffect(() => {    
        defineLimitePerPage();
    },[])
    // defineMaxPage est appelé en dehors du useEffect pour qu'il prennent la valeur à jour de limitPerPage (et non pas 1)
    defineMaxPage();
    completePages();

    if (error) {
        return <span>Il y a eu un problème: {error}</span>
      }

      return(
        // la balise section est générée en dehors de toutes conditions, 
        // pour que housingBackgroundRef soit différent de null est permettre la bonne génération de la pagination, 
        // et donc de reste des composants.
        <section className='housingBackground' ref={housingBackgroundRef}>
            { isLoading ? (<span>Patientez, chargement des données</span>)
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