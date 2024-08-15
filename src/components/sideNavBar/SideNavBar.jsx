import yoga from "../../assets/icons/yoga.png";
import swim from "../../assets/icons/swim.png";
import bike from "../../assets/icons/bike.png";
import barbell from "../../assets/icons/barbell.png";
import { Link } from "react-router-dom";


/**
 * ${1:Description placeholder}
 *
 * @export
 * @returns {${2:*}}
 */
export default function sideNavBar() {
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
              <img src={swim} alt="swimmer" />
            </Link>
          </li>
          <li>
            <Link className="sideNavBarButton">
              <img src={bike} alt="Bike" />
            </Link>
          </li>
          <li>
            <Link className="sideNavBarButton">
              <img src={barbell} alt="barbell" />
            </Link>
          </li>
      </ul>
      
      <div className="copyright">Copiryght, SportSee 2020</div>
    </div>
  )
}
