import "./Navbar.css";
import logo from "../../assets/turquoise-1.jpg";
import { HiOutlineMenu } from "react-icons/hi";

const Navbar = (props) => {
  return (
    <div className="navbar">
      <div className="container">
        <div className="img-div">
          <img src={logo} className="logo-img" />
          <h1>Classic Auto</h1>
        </div>
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
              Find a Dealership
            </a>
          </li>
        </ul>
        <div className="hamburger">
          <HiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
