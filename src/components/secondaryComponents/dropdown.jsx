import { useState } from 'react'
import '../../assets/style/secondarycomponentsStyle/dropdown.scss'

function Dropdown({dropdownTitle, dropdownContent}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <div className='dropdown__outfit'>
            <div className='dropdown__header'>
                <p className='dropdown__title'>{dropdownTitle}</p>
                <button 
                    className={`dropdown__button ${isOpen ? 'open' : 'close'}`}
                    onClick= {() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
                >
                </button>
            </div>
            <div className='dropdown__content close'>
                {Array.isArray(dropdownContent) ? 
                        dropdownContent.map(content =>
                            <ul>
                                <li 
                                    key={dropdownContent.indexOf(content)}
                                >
                                    {content}
                                </li>
                            </ul>
                        )
                    : <p>{dropdownContent}</p>    
                    }
            </div>
        </div>
    )
}

export default Dropdown