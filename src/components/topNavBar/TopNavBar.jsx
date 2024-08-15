import logo from "../../assets/icons/logo.png";
import '../../assets/style/main.css';
import {Link} from 'react-router-dom'

/**
 * ${1:Description placeholder}
 *
 * @export
 * @returns {${2:*}}
 */
export default function topNavBar() {
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
            <Link className="topNavBarButton">
                Profil
            </Link>
          </li>
          <li>
              <Link className="topNavBarButton">
                Réglages
              </Link>
          </li>
          <li >
            <Link className="topNavBarButton">
                Communauté
            </Link>
          </li>
        </ul>
      </div>
  )
}
