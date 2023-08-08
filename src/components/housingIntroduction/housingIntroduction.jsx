import './housingIntroduction.scss'
import Tags from '../tags/tags'
import Rating from '../rating/rating'

function Introduction({title, location, tags, host, rating}) {

    //Gestion du nombre d'étoiles à afficher, il suffit de modifier maxRate pour cela.
    //rateRange est un tableau que l'on complète avec la fonction completeRateRange, permettant une itération dessus et la génération des étoiles de manière dynamique.
    const maxRate = 5
    let rateRange = []

    function completeRateRange() {
        for (let r = 0; r <= maxRate; r++) {
            rateRange.push(r)
        }
        rateRange.splice(0,1)
    }

    completeRateRange()

        return(
        <>                  
            <div className='Housing__introduction'>

                <div className='Introduction__rentalPresentation'>
                    <h1 className='Introduction__title'>{title}</h1>
                    <h2 className='Introduction__location'>{location}</h2>
                    
                    <Tags 
                        key={tags.indexOf()}
                        tags={tags}
                    />
                </div>

                <div className="Introduction__ownerPresentation">
                    <div className='Introduction__ownerContainer'>
                        <p>{host.name}</p>
                        <img src={`${host.picture}`} alt={`portrait de ${host.name}`} />
                    </div>

                    <Rating
                        key={rating.indexOf()} 
                        rating={rating}
                        rateRange={rateRange}
                    />
                </div>

            </div>
        </>              
    )
}

export default Introduction