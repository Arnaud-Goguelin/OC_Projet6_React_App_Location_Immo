import { useState } from 'react'
import { useParams } from 'react-router-dom'
import './dropdown.scss'

function Dropdown({dropdownTitle, dropdownContent}) {

    const [isOpen, setIsOpen] = useState(false)
    const { about } = useParams()


    return (
        // <details 
        // className={`dropdown__outfit ${isOpen ? 'open' : ''}`}
        //     onClick= {() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        // >
        //     <summary>
        //         <span>{dropdownTitle}</span>
        //         <div className={`dropdown__button ${isOpen ? 'open' : 'close'}`}></div>
        //     </summary>
        //     <div 
        //         className={`dropdown__content ${isOpen ? 'open' : ''}`}
        //         onClick={(event) => event.target.closest('details').removeAttribute('open')}
        //     >
        //         {Array.isArray(dropdownContent) ? (
        //             <ul>
        //                 {dropdownContent.map((content, index) =>
        //                     (<li key={index}>
        //                         {content}
        //                     </li>))
        //                 }
        //             </ul>)
        //         : (<p>{dropdownContent}</p>)
        //         }
        //     </div>
        // </details>

        <div
            className='dropdown__outfit'
            onClick= {() => (isOpen ? setIsOpen(false) : setIsOpen(true))}
        >
            <div className='dropdown__header'>
                <h3>{dropdownTitle}</h3>
                <button className={`dropdown__button ${isOpen ? 'open' : 'close'}`}></button>
            </div>
            <div 
                className={`dropdown__content ${isOpen ? 'open' : ''} ${about === 'about' ? 'About' : 'Housing'}`}
                onClick={(event) => event.target.removeAttribute('open')}
            >
                {Array.isArray(dropdownContent) ? (
                    <ul>
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