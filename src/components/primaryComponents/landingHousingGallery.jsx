import { useContext, useState } from 'react';
import { DataContext } from '../../utils/context';
import Thumb from '../secondaryComponents/thumb'
import Pagination from '../secondaryComponents/pagination';
import '../../assets/style/primaryComponentsStyle/housingBackground.scss'

// const LIMIT_PER_PAGE = 10;
 
// const ArticlesList = ({articles}) => {
 
//     const [page, setPage] = React.useState(0);
     
//     const MAX_PAGE = Math.ceil(articles.length / LIMIT_PER_PAGE);
     
//     function getSequence() {
         
//         return articles.slice(LIMIT_PER_PAGE * page, LIMIT_PER_PAGE * (page + 1) );
//     }
 
// };

function HousingGallery() {

    const { data, isLoading, error } = useContext(DataContext)

    const limitPerPage = 6
    const [ currentPage, setPage ] = useState(1)
    let maxPage = null

    function defineMaxPage() {
        isLoading? maxPage=null : maxPage = Math.ceil(data.length / limitPerPage)
    }

    defineMaxPage()


    function previousPage() {
        currentPage === 1 ? setPage(maxPage) : setPage(currentPage - 1)
    }

    function nextPage() {
        currentPage === maxPage ? setPage(1) : setPage(currentPage + 1)
    }

    if (error) {
        return <span>Il y a eu un problème: {error}</span>
      }

    return(
        <section className='housingGallery' >
            { isLoading ? 
            (<span>Patientez, chargement des données</span>)
            :       
            (<>
                {data.slice(limitPerPage*(currentPage - 1), limitPerPage*(currentPage)).map(({id, title, cover, host}) => (
                    <Thumb
                    key={id}
                    id={id}
                    title={title}
                    cover ={cover}
                    host={host.name}
                    />
                ))}
                <Pagination className="pagination"
                    key={`page n°${currentPage}`}
                    maxPage={maxPage}
                    currentPage={currentPage}
                    previousPage={previousPage}
                    nextPage={nextPage}
                />
            </> )
            }


        </section>
    )
}

export default HousingGallery

// pour la mise en page de la galerie, il est possible de sélectionner le dernier thumb pour lui placer une class particulière : "n child 2n" ou "3n+1 child . lastchild"