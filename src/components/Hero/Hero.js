import "./Hero.css";
import { FaSearchPlus } from "react-icons/fa";
const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <h1> find your dream car</h1>
        <p>
          Here you can buy your next car quickly and easily. Browse thousands of
          quality vehicles, each with a low price.
        </p>
        <form className="search">
          <div>
            <input type="text" placeholder="Search Here"></input>
          </div>
          <div className="radio-btn">
            <input type="radio" checked></input>
            <label>Buy</label>
            <input type="radio"></input>
            <label>Rent</label>
            <button type="submit">
              <FaSearchPlus className="search-icon" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Hero;
