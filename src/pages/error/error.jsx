import { Link } from 'react-router-dom'
import './error.scss'

function Error() {
    return (
        <div className='errorPage'>
            <p>404</p>
            <p>Oups! La page que vous demandez n'existe pas</p>
            <Link to='/'>Retourner sur la page d'accueil</Link>
        </div>
    )
}

export default Error