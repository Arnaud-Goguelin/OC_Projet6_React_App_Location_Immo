import Dropdown from '../components/secondaryComponents/dropdown'
import Banner from '../components/secondaryComponents/banner'
import '../assets/style/secondarycomponentsStyle/about.scss'

function About() {

    return(
        <>
            <Banner />

        <div className='About__container'>

            <Dropdown 
                key={'About-Fiabilité'}
                dropdownTitle={'Fiabilité'}
                dropdownContent={'Les annonces postées sur Kasa grantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'}
            />
            <Dropdown 
                key={'About-Respect'}
                dropdownTitle={'Respect'}
                dropdownContent={'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraïnera une exclusion de notre plateforme'}
            />
            <Dropdown 
                key={'About-Service'}
                dropdownTitle={'Service'}
                dropdownContent={'Erreur sur la maquette, le texte pour les dropdowns "Respect" et "Service" est le même'}
            />
            <Dropdown 
                key={'About-Sécurité'}
                dropdownTitle={'Sécurité'}
                dropdownContent={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurités établis par nos services. En laissants une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}
            />

        </div>
        </>
    )
}

export default About