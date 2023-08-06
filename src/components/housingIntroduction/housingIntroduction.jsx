import './housingIntroduction.scss'
import Tags from '../tags/tags'
import Rating from '../rating/rating'

function Introduction({title, location, tags, host, rating}) {

    //Gestion du nombre d'étoiles à afficher, il suffit de modifier maxRate pour cela.
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
            <div className='Introduction__container'>

                <div className='Introduction__housingPresentation'>
                    <h1 className='Introduction__title'>{title}</h1>
                    <p className='Introduction__location'>{location}</p>
                    
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