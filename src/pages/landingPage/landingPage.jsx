import Banner from '../../components/banner/banner'
import HousingGallery from '../../components/landingHousingGallery/landingHousingGallery'
import Cliff from '../../assets/images/cliff.avif'



function LandingPage() {
    return(
        <>
            <Banner 
                image={Cliff}
                alt={'Image d\'une falaise'}
                text={'Chez vous, partout et ailleurs'}
            />
            <HousingGallery />
        </>
    )
}

export default LandingPage