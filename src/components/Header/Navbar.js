import "./Navbar.css";
import logo from "../../assets/turquoise-1.jpg";
import { HiOutlineMenu } from "react-icons/hi";
import { FaRegTimesCircle } from "react-icons/fa";
import { useState } from "react";

const Navbar = () => {
  const [clicked, setClicked] = useState(false);
  const clickHandler = () => {
    setClicked(!clicked);
  };

  return (
    <div className="navbar">
      <div className="container">
        <div className="img-div">
          <img src={logo} className="logo-img" />
          <h1>Classic Auto</h1>
        </div>
        <ul className={clicked ? "nav-menu active" : "nav-menu"}>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact </a>
          </li>
          <li>
            <a href="#">Find a Dealership</a>
          </li>
        </ul>
        <div className="hamburger " onClick={clickHandler}>
          {clicked ? (
            <FaRegTimesCircle className="hamburger-icon" />
          ) : (
            <HiOutlineMenu className="hamburger-icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
