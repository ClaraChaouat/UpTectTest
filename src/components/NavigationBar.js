import "./navigationbar.scss";
import logo from "../images/navbar-logo.png";
import narrow from "../images/narrow-down.svg";

export function NavigationBar() {
  return (
    <div className="navBar">
      <div className="navBarIcon">
        <img src={logo} alt="Logo"></img>
      </div>
      <nav className="navBarItems">
        <ul>
          <li>
            <a href="!#">
              Product<img src={narrow} alt="Toggle Button "></img>
            </a>
          </li>
          <li>
            <a href="!#">Pricing</a>
          </li>
          <li>
            <a href="!#">Customers</a>
          </li>
          <li>
            <a href="!#">
              Learn<img src={narrow} alt="Toggle Button "></img>
            </a>
          </li>
        </ul>
      </nav>
      <div className="navBarLogIn">
        <a href="!#" className="navBarLogInItem">
          Log in
        </a>
        <button>
          Start <span class="buttonFullText">14-days</span> trial
        </button>
      </div>
    </div>
  );
}
