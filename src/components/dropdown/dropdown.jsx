import { useRef, useState, useEffect } from 'react'
import './dropdown.scss'

function Dropdown({dropdownTitle, dropdownContent}) {

    const [isOpen, setIsOpen] = useState(false)
    
    //Gestion de la hauteur adaptée au contenu du dopdown:
    //On place une ref sur les contenus de dropdown__content (la liste d'équipements ou le parapgraphe de description)
    //Au changement de isOpen (statut d'ouverture ou fermeture du dropdown), 
    //On mesure la hauteur du contenu avec l'attribut scrollHeight appliqué à l'élément actuel de la ref définie si isOpen est à "true" (ouvert).
    //La hauteur ainsi définie est passée en style in line commet hauteur finale de l'élément (hauteur initiale à 0px dans dropdown.scss) ce quii permet l'animation et la génération d'une hauteur adaptées au contenu.

    const [customHeight, setCustomHeight] = useState(0)
    const dropdown__contentRef = useRef(null)

    useEffect(() => {
        setCustomHeight(isOpen ? dropdown__contentRef.current.scrollHeight : 0);
      }, [isOpen]);



    return (
        // les balises détails et summary semblent tout indiquées pour créer les dropdowns. 
        // Toutefois leur mise en forme (notamment l'animation de l'apparaition du texte sous le titre), 
        // est à gérer avec du code complexe en JS à priori, et pas en SCSS. Ceci rendrait trop complexe le code de Kasa.

        <div
            className='dropdown'
            onClick= {() => setIsOpen(!isOpen)}
        >
            <div className='dropdown__header'>
                <h3>{dropdownTitle}</h3>
                <button 
                    className={`dropdown__button ${isOpen ? 'open' : 'close'}`} 
                    aria-label={isOpen ? `Fermer le détails de l'encart ${dropdownTitle}` : `Ouvrir le détails de l'encart ${dropdownTitle}`}
                >
                </button>
            </div>
            <div 
                className={`dropdown__content ${isOpen ? 'open' : ''}`}
                style={{ height: customHeight }} 
            >
                {Array.isArray(dropdownContent) ? (
                    <ul
                    ref={dropdown__contentRef}
                    aria-label={`liste des ${dropdownTitle}`}
                    >
                        {dropdownContent.map((content, index) =>
                            (<li key={index}>
                                {content}
                            </li>))
                        }
                    </ul>)
                : (<p ref={dropdown__contentRef}>{dropdownContent}</p>)
                }
            </div>
        </div>
    )
}



export default Dropdown