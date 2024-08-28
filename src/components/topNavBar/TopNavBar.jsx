import logo from "../../assets/icons/logo.png";
import '../../assets/style/main.css';
import { Link } from 'react-router-dom';

/**
 * Composant de la barre de navigation supérieure.
 * Affiche le logo de l'application et une liste de liens de navigation vers différentes sections du site.
 *
 * @export
 * @returns {JSX.Element} Le composant de la barre de navigation.
 */
export default function TopNavBar() {
  return (
      <div className="topNavBarContainer">
        <img src={logo} alt="logo SportSee" />
        <ul className="topNavBarButtonContainer">
          <li>
            <Link className="topNavBarButton" to='/'>
              Accueil
            </Link>
          </li>
          <li>
            <Link className="topNavBarButton" to='/profile'>
                Profil
            </Link>
          </li>
          <li>
              <Link className="topNavBarButton" to='/settings'>
                Réglages
              </Link>
          </li>
          <li >
            <Link className="topNavBarButton" to='/community'>
                Communauté
            </Link>
          </li>
        </ul>
      </div>
  )
}
