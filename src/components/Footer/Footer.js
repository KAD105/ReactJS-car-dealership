import React from "react";
import "./Footer.css";

import {
  AiFillTwitterCircle,
  AiFillInstagram,
  AiFillCar,
  AiOutlineMail,
  AiOutlineArrowRight,
} from "react-icons/ai";
import { FaFacebook, FaPinterest, FaInstagramSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer_car_icon">
          <AiFillCar className="car-icon" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            fermentum nisl sed pharetra convallis. Sed ac mollis massa, sed
            fringilla nunc.
          </p>
        </div>
        <div className="office">
          <h2>Office</h2>
          <ul>
            <li>4812 Hall Place</li>
            <li>New Yourk,534504</li>
            <li>Australia </li>
          </ul>
          <p>unknown@yahoo.com</p>
          <p>0154 434 3493</p>
        </div>
        <div className="links">
          <h2>links</h2>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Services</a>
            </li>
            <li>
              <a href="#"> About Us</a>
            </li>
            <li>
              <a href="#">Contacts</a>
            </li>
            <li>
              <a src="#">Find a Car</a>
            </li>
          </ul>
        </div>
        <div className="contact">
          <h2>Newsletter</h2>
          <form className="contact-form">
            <AiOutlineMail className="mail-icon" />
            <input className="emil-input" placeholder="Enter your email" />
            <AiOutlineArrowRight className="arrow-icon" />
          </form>
          <div>
            <AiFillTwitterCircle className="contact-icon twitter" />
            <FaInstagramSquare className="contact-icon insta" />
            <FaPinterest className="contact-icon pinterest" />
            <FaFacebook className="contact-icon facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
