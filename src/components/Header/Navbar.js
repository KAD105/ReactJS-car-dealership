import "./Navbar.css";
import logo from "../../assets/logo.jpg";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <img src={logo} className="logo" />
      <nav>
        <ul className="navbar__control">
          <li>
            <a href="#" target="_blank">
              About
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Contact{" "}
            </a>
          </li>
          <li>
            <a href="#" target="_blank">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
