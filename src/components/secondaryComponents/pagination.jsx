import '../../assets/style/secondarycomponentsStyle/pagination.scss'

function Pagination({ currentPage, maxPage, nextPage, previousPage }) {

    let pages=[1,2,3,4]

    return (
        <ul className="pagination__container">
            <button onClick={previousPage} className="pagination__Button navigatation previous" aria-label='page précédente'></button>
            {pages.map((page) =>
            <button key={page} className={`pagination__Button ${currentPage === page ? 'active' : ''}`} aria-pressed={`${currentPage === page ? 'true' : 'false'}`}>{page}</button>
            )}
            <button onClick={nextPage} className="pagination__Button navigatation next" aria-label='page suivante'></button>
        </ul>
    )

}

export default Pagination