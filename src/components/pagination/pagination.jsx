import './pagination.scss'

function Pagination({ currentPage, maxPage, nextPage, previousPage, selectPage }) {

    let pages=[]

    function completePages() {
        for (let p = 1; p <= maxPage; p++) {
            pages.push(p)
        }
    }

    completePages()

    return (
        <ul className="pagination__container">
            <button 
                onClick={previousPage} 
                className='pagination__Button navigatation previous'
                aria-label='Aller à la page précédente'
            >
            </button>
            {pages.map((page) =>
                <button 
                    key={page}
                    onClick={() => selectPage(page)} 
                    className={`pagination__Button ${currentPage === page ? 'active' : ''}`} 
                    aria-pressed={`${currentPage === page ? 'true' : 'false'}`}
                    aria-label={`Afficher page n°${page}`}
                >
                    {page}
                </button>
            )}
            <button 
                onClick={nextPage} 
                className='pagination__Button navigatation next'
                aria-label='Aller à la page suivante'
            >
            </button>
        </ul>
    )

}

export default Pagination