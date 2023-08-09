import { useState } from 'react'
import './dropdown.scss'

function Dropdown({dropdownTitle, dropdownContent}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        // les balises détails et summary semblent tout indiquées pour créer les dropdowns, toutefois leur mise en forme (notamment l'animation de l'apparaition du texte sous le titre), 
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
            <div className={`dropdown__content ${isOpen ? 'open' : ''}`}>
                {Array.isArray(dropdownContent) ? (
                    <ul
                    aria-label={`liste des ${dropdownTitle}`}
                    >
                        {dropdownContent.map((content, index) =>
                            (<li key={index}>
                                {content}
                            </li>))
                        }
                    </ul>)
                : (<p>{dropdownContent}</p>)
                }
            </div>
        </div>
    )
}

export default Dropdown