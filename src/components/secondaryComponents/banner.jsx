import '../../assets/style/secondarycomponentsStyle/banner.scss'

function Banner() {
    return(
        <div className="landing__banner">
            <p>Chez vous, partout et ailleurs</p>
        </div>
    )
}

export default Banner

// inclure la photo dans une <img> ce qui permettra de changer d'image en fonction de la page choisie (accueil ou about)
// permet d'ajouter le filtre sur l'image   