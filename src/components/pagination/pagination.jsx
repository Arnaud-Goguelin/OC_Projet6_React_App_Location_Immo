import './pagination.scss'

function Pagination({ pages, currentPage, nextPage, previousPage, selectPage }) {

    return (
        <ul className="pagination">
            <li>
                <button 
                    onClick={previousPage} 
                    className='pagination__Button navigatation previous'
                    aria-label='Aller à la page précédente'
                >
                </button>
            </li>
            {pages.map((page) =>
                <li key={`page: ${page}`}>
                    <button 
                        onClick={() => selectPage(page)} 
                        className={`pagination__Button ${currentPage === page ? 'active' : ''}`} 
                        // eslint-disable-next-line jsx-a11y/aria-proptypes
                        aria-pressed={`${currentPage === page ? 'true' : 'false'}`}
                        aria-label={`Afficher la page n°${page}`}
                    >
                    {page}
                    </button>
                </li>
            )}
            <li>
                <button 
                    onClick={nextPage} 
                    className='pagination__Button navigatation next'
                    aria-label='Aller à la page suivante'
                >
                </button>
            </li>
        </ul>
    )

}

export default Pagination