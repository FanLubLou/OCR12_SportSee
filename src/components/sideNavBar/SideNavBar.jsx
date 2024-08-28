import yoga from "../../assets/icons/yoga.png";
import swim from "../../assets/icons/swim.png";
import bike from "../../assets/icons/bike.png";
import barbell from "../../assets/icons/barbell.png";
import { Link } from "react-router-dom";

/**
 * Composant de la barre de navigation latérale.
 * Affiche une série d'icônes représentant différentes activités, chaque icône étant un lien de navigation.
 *
 * @export
 * @returns {JSX.Element} Le composant de la barre de navigation latérale.
 */
export default function SideNavBar() {
  return (
    <div className="sideNavBarContainer">
      <ul className="sideNavBarButtonContainer">
          <li>
            <Link className="sideNavBarButton">
              <img src={yoga} alt="Yoga" />
            </Link>
          </li>
          <li>
            <Link className="sideNavBarButton">
              <img src={swim} alt="Swimming" />
            </Link>
          </li>
          <li>
            <Link className="sideNavBarButton">
              <img src={bike} alt="Cycling" />
            </Link>
          </li>
          <li>
            <Link className="sideNavBarButton">
              <img src={barbell} alt="Weightlifting" />
            </Link>
          </li>
      </ul>
      
      <div className="copyright">Copyright, SportSee 2020</div>
    </div>
  )
}
