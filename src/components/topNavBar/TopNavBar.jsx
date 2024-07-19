import logo from "../../assets/icons/logo.png";
import '../../assets/style/main.css';
import {Link} from 'react-router-dom'

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
            <Link className="topNavBarButton" to='/'>
                Profil
            </Link>
          </li>
          <li>
              <Link className="topNavBarButton" to='/'>
                Réglages
              </Link>
          </li>
          <li >
            <Link className="topNavBarButton" to='/'>
                Communauté
            </Link>
          </li>
        </ul>
      </div>
  )
}
