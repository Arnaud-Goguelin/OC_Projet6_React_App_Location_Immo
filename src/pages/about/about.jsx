import Dropdown from '../../components/dropdown/dropdown'
import Banner from '../../components/banner/banner'
import './about.scss'

function About() {

    return(
        <>
            <Banner />

        <section className='About__container'>

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
                dropdownContent={'Erreur sur la maquette, les textes pour les dropdowns "Respect" et "Service" sont les mêmes'}
            />
            <Dropdown 
                key={'About-Sécurité'}
                dropdownTitle={'Sécurité'}
                dropdownContent={'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurités établis par nos services. En laissants une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectées. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}
            />

        </section>
        </>
    )
}

export default About