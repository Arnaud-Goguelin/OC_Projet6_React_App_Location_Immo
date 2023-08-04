import activeStar from '../../assets/images/activeStar.png'
import inactiveStar from '../../assets/images/inactiveStar.png'
import '../../assets/style/secondarycomponentsStyle/rating.scss'

function Rating({rating, rateRange}) {

    return (
        <div className='Introduction__notationContainer'>
            {rateRange.map(
                rate => rating >= rate ? 
                    <img 
                        className='Introduction__notationStar'
                        key={rate}
                        src={activeStar} 
                        alt={`étoile ${rateRange.indexOf(rate)+1} colorée en rouge symbolisant la notation`}
                    />
                    :
                    <img 
                        className='Introduction__notationStar'
                        key={rate}
                        src={inactiveStar} 
                        alt={`étoile ${rateRange.indexOf(rate)+1} non colorée symbolisant la notation`}
                    />
                )
            }
        </div>
    )
}

export default Rating