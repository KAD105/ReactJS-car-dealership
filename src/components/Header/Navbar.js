import "./Navbar.css";

const Navbar = (props) => {
  return (
    <div className="navbar">
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
