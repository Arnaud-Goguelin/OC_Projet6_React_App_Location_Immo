import './housingCarousel.scss'
import { useState, useEffect } from 'react'

function Carousel({pictures}) {

    const [currentPictureIndex, updatePictureIndex] = useState(0)

    function nextPictureIndex() {
        currentPictureIndex < (pictures.length - 1) ? updatePictureIndex(currentPictureIndex + 1) : updatePictureIndex(0)
    }

    function previousPictureIndex() {
        currentPictureIndex > 0 ? updatePictureIndex(currentPictureIndex - 1) : updatePictureIndex(pictures.length - 1)
    }

    useEffect (() => {
        const timer = setTimeout(nextPictureIndex, 3000);
        return () => clearTimeout(timer)
        }
   ,[currentPictureIndex])
    

    return(
        <div 
            className="carousel" 
        >
            <img src={pictures[currentPictureIndex]} alt="" />
            <div 
                className={pictures.length === 1 ? "inactive" :"carousel__buttonContainer"}
            >
                <button 
                    onClick={previousPictureIndex} 
                    className="carousel__navigateButton previous"
                >
                </button>
                <button 
                    onClick={nextPictureIndex} 
                    className="carousel__navigateButton next"
                >
                </button>
            </div>
            <p 
                className={pictures.length === 1 ? "inactive" : "carousel__imageCounter"}
            >
                {currentPictureIndex + 1}/{pictures.length}
            </p>
        </div>
    )

}

export default Carousel