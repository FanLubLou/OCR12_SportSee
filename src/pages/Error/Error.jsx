import { Link } from "react-router-dom"

export default function Error() {
    return (        
        <div className='wrapperError'>
            <h1 className='Error404'>404</h1>
            <p className='Error404Content'>Oups! La page que vous demandez n'existe pas.</p>
            <Link className='Error404Link' to='/'>Retourner sur la page d'accueil</Link>
        </div>            
  )
}
