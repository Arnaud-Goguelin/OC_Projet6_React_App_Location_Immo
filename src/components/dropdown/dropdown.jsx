import { useState } from 'react'
import './dropdown.scss'

function Dropdown({dropdownTitle, dropdownContent}) {

    const [isOpen, setIsOpen] = useState(false)

    return (
        <details 
            className='dropdown__outfit'
            onClick= {() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
            <summary className='dropdown__header'>
                <span>{dropdownTitle}</span>
                <div className={`dropdown__button ${isOpen ? 'open' : 'close'}`}></div>
            </summary>
            <div 
                className={`dropdown__content ${isOpen ? 'open' : 'close'}`}
                onClick={(event) => event.target.closest('details').removeAttribute('open')}
            >
                {Array.isArray(dropdownContent) ? 
                    dropdownContent.map(content =>
                        <ul>
                            <li key={dropdownContent.indexOf(content)}>
                            {content}
                            </li>
                        </ul>
                    )
                : <p>{dropdownContent}</p>
                }
            </div>
        </details>
    )
}

export default Dropdown